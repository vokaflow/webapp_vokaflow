
export class SizeReporter {
  static async measureResourceSizes() {
    try {
      // Measure JS bundle sizes
      const jsFiles = document.querySelectorAll('script[src]');
      const jsSizes = await Promise.all(
        Array.from(jsFiles).map(async (file) => {
          const response = await fetch(file.src);
          const blob = await response.blob();
          const compressionInfo = response.headers.get('content-encoding');
          return {
            name: file.src.split('/').pop(),
            size: blob.size,
            type: 'JavaScript',
            compression: compressionInfo || 'none'
          };
        })
      );

      // Measure CSS sizes
      const cssFiles = document.querySelectorAll('link[rel="stylesheet"]');
      const cssSizes = await Promise.all(
        Array.from(cssFiles).map(async (file) => {
          const response = await fetch(file.href);
          const blob = await response.blob();
          const compressionInfo = response.headers.get('content-encoding');
          return {
            name: file.href.split('/').pop(),
            size: blob.size,
            type: 'CSS',
            compression: compressionInfo || 'none'
          };
        })
      );

      // Measure image sizes
      const images = document.querySelectorAll('img');
      const imageSizes = await Promise.all(
        Array.from(images).map(async (img) => {
          if (img.src.startsWith('data:')) return null;
          try {
            const response = await fetch(img.src);
            const blob = await response.blob();
            const compressionInfo = response.headers.get('content-encoding');
            return {
              name: img.src.split('/').pop(),
              size: blob.size,
              type: 'Image',
              compression: compressionInfo || 'none'
            };
          } catch (error) {
            console.warn(`Could not measure size for image: ${img.src}`);
            return null;
          }
        })
      ).then(sizes => sizes.filter(Boolean));

      const allResources = [...jsSizes, ...cssSizes, ...imageSizes];

      // Calculate total sizes
      const totalSize = allResources.reduce((acc, curr) => acc + curr.size, 0);
      const sizeByType = allResources.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + curr.size;
        return acc;
      }, {});

      // Format sizes in KB
      const formatSize = (bytes) => `${(bytes / 1024).toFixed(2)} KB`;

      // Compression analysis
      const compressionAnalysis = allResources.reduce((acc, curr) => {
        acc[curr.compression] = (acc[curr.compression] || 0) + 1;
        return acc;
      }, {});

      console.table({
        'Total Size': formatSize(totalSize),
        'JavaScript Size': formatSize(sizeByType.JavaScript || 0),
        'CSS Size': formatSize(sizeByType.CSS || 0),
        'Images Size': formatSize(sizeByType.Image || 0)
      });

      // Detailed resource breakdown with compression info
      console.group('Detailed Resource Sizes and Compression');
      allResources.forEach(resource => {
        console.log(`${resource.name}: ${formatSize(resource.size)} (${resource.compression})`);
      });
      console.groupEnd();

      // Compression summary
      console.group('Compression Analysis');
      Object.entries(compressionAnalysis).forEach(([type, count]) => {
        console.log(`${type}: ${count} resources`);
      });
      console.groupEnd();

      return {
        totalSize,
        sizeByType,
        detailedResources: allResources,
        compressionAnalysis
      };
    } catch (error) {
      console.error('Error measuring resource sizes:', error);
      return null;
    }
  }
}
