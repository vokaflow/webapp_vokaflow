
export const performanceMonitor = {
  init() {
    if (typeof window === 'undefined') return;

    // Initialize performance monitoring
    this.initializeWebVitals();
    this.initializeResourceTiming();
    this.initializeNetworkQuality();
    this.initializeCDNMetrics();
    this.initializeCompressionMetrics();
  },

  initializeWebVitals() {
    // Web Vitals monitoring implementation
    const webVitals = {
      cls: 0,
      fid: 0,
      lcp: 0,
      ttfb: 0,
      fcp: 0
    };

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'layout-shift') {
          webVitals.cls += entry.value;
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'first-input') {
          webVitals.fid = entry.processingStart - entry.startTime;
        }
      }
    }).observe({ type: 'first-input', buffered: true });

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          webVitals.lcp = entry.startTime;
        }
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // Monitor TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    if (navigationEntry) {
      webVitals.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
    }

    // Monitor FCP
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          webVitals.fcp = entry.startTime;
        }
      }
    }).observe({ type: 'paint', buffered: true });

    return webVitals;
  },

  initializeResourceTiming() {
    // Resource timing monitoring
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      const cdnResources = entries.filter(entry => 
        entry.name.includes('cdn.cloudflare.com')
      );

      const metrics = cdnResources.map(entry => ({
        name: entry.name,
        duration: entry.duration,
        size: entry.transferSize,
        type: entry.initiatorType
      }));

      console.info('CDN Resource Metrics:', metrics);
      
      // Calculate averages
      const avgLoadTime = metrics.reduce((acc, curr) => acc + curr.duration, 0) / metrics.length;
      console.info('Average CDN Resource Load Time:', avgLoadTime.toFixed(2), 'ms');

    }).observe({ entryTypes: ['resource'] });
  },

  initializeNetworkQuality() {
    // Network quality monitoring
    if ('connection' in navigator) {
      const connection = navigator.connection;
      
      const reportNetworkQuality = () => {
        const metrics = {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        };
        
        console.info('Network Quality Metrics:', metrics);
      };

      connection.addEventListener('change', reportNetworkQuality);
      reportNetworkQuality();
    }
  },

  initializeCDNMetrics() {
    // CDN-specific metrics
    let cdnMetrics = {
      totalRequests: 0,
      totalBytes: 0,
      cacheHits: 0,
      cacheMisses: 0,
      errors: 0
    };

    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      entries.forEach(entry => {
        if (entry.name.includes('cdn.cloudflare.com')) {
          cdnMetrics.totalRequests++;
          cdnMetrics.totalBytes += entry.transferSize || 0;
          
          // Check cache status from response headers
          const fromCache = entry.transferSize === 0 && entry.decodedBodySize > 0;
          if (fromCache) {
            cdnMetrics.cacheHits++;
          } else {
            cdnMetrics.cacheMisses++;
          }
          
          if (!entry.responseStatus || entry.responseStatus >= 400) {
            cdnMetrics.errors++;
          }
        }
      });
      
      console.info('CDN Performance Metrics:', {
        ...cdnMetrics,
        cacheHitRate: (cdnMetrics.cacheHits / cdnMetrics.totalRequests * 100).toFixed(2) + '%',
        errorRate: (cdnMetrics.errors / cdnMetrics.totalRequests * 100).toFixed(2) + '%',
        averageRequestSize: (cdnMetrics.totalBytes / cdnMetrics.totalRequests).toFixed(2) + ' bytes'
      });
      
    }).observe({ entryTypes: ['resource'] });
  },

  initializeCompressionMetrics() {
    // Compression monitoring
    let compressionMetrics = {
      totalCompressedSize: 0,
      totalUncompressedSize: 0,
      compressedResources: 0,
      uncompressedResources: 0
    };

    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      entries.forEach(entry => {
        if (entry.transferSize && entry.decodedBodySize) {
          const compressionRatio = (entry.transferSize / entry.decodedBodySize * 100).toFixed(2);
          const savings = entry.decodedBodySize - entry.transferSize;
          
          compressionMetrics.totalCompressedSize += entry.transferSize;
          compressionMetrics.totalUncompressedSize += entry.decodedBodySize;
          
          if (entry.transferSize < entry.decodedBodySize) {
            compressionMetrics.compressedResources++;
            console.info(`Resource compressed: ${entry.name}`);
            console.info(`Compression ratio: ${compressionRatio}%`);
            console.info(`Bytes saved: ${(savings / 1024).toFixed(2)} KB`);
          } else {
            compressionMetrics.uncompressedResources++;
          }
        }
      });
      
      const totalSavings = compressionMetrics.totalUncompressedSize - compressionMetrics.totalCompressedSize;
      const overallCompressionRatio = (compressionMetrics.totalCompressedSize / compressionMetrics.totalUncompressedSize * 100).toFixed(2);
      
      console.info('Compression Metrics:', {
        ...compressionMetrics,
        totalSavingsKB: (totalSavings / 1024).toFixed(2) + ' KB',
        overallCompressionRatio: overallCompressionRatio + '%',
        compressedResourcesCount: compressionMetrics.compressedResources,
        compressionEfficiency: ((totalSavings / compressionMetrics.totalUncompressedSize) * 100).toFixed(2) + '%'
      });
      
    }).observe({ entryTypes: ['resource'] });
  }
};
