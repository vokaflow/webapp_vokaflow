
import React, { Suspense, useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr, AdaptiveEvents, useProgress } from '@react-three/drei';
import { DelfiflowModel } from './delfiflow-model';

function LoadingIndicator() {
  const { progress } = useProgress();
  return progress < 100 ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ) : null;
}

export function DelfiflowContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  const canvasConfig = useMemo(() => ({
    camera: { position: [0, 0, 5], fov: 45 },
    style: { 
      background: 'transparent',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    },
    dpr: [1, 1.5],
    performance: { 
      min: 0.5,
      max: 0.75,
      debounce: 200
    },
    gl: {
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      precision: 'lowp',
      depth: false,
      stencil: false
    }
  }), []);

  useEffect(() => {
    let mounted = true;

    const loadModel = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (mounted) setIsLoaded(true);
      } catch (error) {
        console.error('Error loading 3D model:', error);
      }
    };

    loadModel();

    return () => {
      mounted = false;
      setIsLoaded(false);
    };
  }, []);

  return (
    <div className="h-[140px] w-[250px] relative">
      <LoadingIndicator />
      {isLoaded && (
        <Canvas {...canvasConfig}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Suspense fallback={null}>
            <DelfiflowModel key={Date.now()} />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={6}
          />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
        </Canvas>
      )}
    </div>
  );
}
