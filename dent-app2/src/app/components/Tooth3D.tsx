// app/Tooth3D.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

function ToothModel(props: any) {
  const gltf = useGLTF("/model.glb"); // public/tooth.glb
  return <primitive object={gltf.scene} {...props} />;
}

export default function Tooth3D() {
  return (
    <div className="w-full max-w-md mx-auto" style={{ height: "400px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Stage environment="city" intensity={0.6}>
          <ToothModel scale={1} />
        </Stage>
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}
