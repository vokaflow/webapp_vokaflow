
import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';

export function DelfiflowModel() {
  const modelRef = useRef();
  const { scene } = useGLTF('/assets/delfiflow.glb', {
    draco: true,
    meshoptCompression: true,
    powerPreference: 'high-performance'
  });
  const { gl } = useThree();

  // Memoize scene optimizations
  const optimizedScene = useMemo(() => {
    const clonedScene = scene.clone();
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        child.frustumCulled = true;
        
        // Optimize geometry
        if (child.geometry) {
          child.geometry.dispose();
          child.geometry = child.geometry.clone();
          child.geometry.attributes.position.needsUpdate = true;
        }
        
        // Optimize materials
        if (child.material) {
          child.material.dispose();
          child.material = child.material.clone();
          child.material.needsUpdate = true;
          child.material.side = 1; // FrontSide only
          child.material.fog = false;
          child.material.flatShading = true;
        }
      }
    });
    return clonedScene;
  }, [scene]);

  useEffect(() => {
    if (gl) {
      gl.powerPreference = 'high-performance';
      gl.antialias = true;
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      gl.compile(optimizedScene, new THREE.Scene());
    }

    return () => {
      optimizedScene.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        }
      });
      useGLTF.clear('/assets/delfiflow.glb');
    };
  }, [gl, optimizedScene]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.00628;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={optimizedScene} 
      scale={[0.8, 0.8, 0.8]} 
      position={[0, -0.5, 0]}
    />
  );
}

useGLTF.preload('/assets/delfiflow.glb', {
  draco: true,
  meshoptCompression: true,
  powerPreference: 'high-performance'
});
