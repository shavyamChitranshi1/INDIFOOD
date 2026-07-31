import { Canvas, useThree } from "@react-three/fiber";
import {
  Center,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { useLayoutEffect, useMemo } from "react";
import * as THREE from "three";

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const { camera } = useThree();

  const model = useMemo(() => {
    const clone = scene.clone(true);

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(clone);

    const size = new THREE.Vector3();
    box.getSize(size);

    const center = new THREE.Vector3();
    box.getCenter(center);

    // Largest dimension
    const maxDim = Math.max(size.x, size.y, size.z);

    // Target size (all models become roughly this size)
    const targetSize = 2.5;

    const scale = targetSize / maxDim;

    clone.scale.setScalar(scale);

    // Recompute after scaling
    box.setFromObject(clone);
    box.getCenter(center);

    // Center model at origin
    clone.position.sub(center);

    return clone;
  }, [scene]);

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(model);

    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);

    // Camera distance based on object size
    const distance = maxDim * 2.2;

    camera.position.set(0, maxDim * 0.4, distance);

    camera.near = 0.1;
    camera.far = 1000;
    camera.updateProjectionMatrix();
  }, [camera, model]);

  return (
    <Center>
      <primitive object={model} />
    </Center>
  );
}

export default function ThreeScene({ modelPath }) {
  return (
    <Canvas
      camera={{
        fov: 35,
      }}
    >
      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
      />

      <Environment preset="studio" />

      <Model modelPath={modelPath} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
        enableDamping
        dampingFactor={0.05}
        target={[0, 0, 0]}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
}

// Optional: preload model
useGLTF.preload("/your-model.glb");