import React, {Suspense} from 'react';
import { useGLTF, OrbitControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber"

function Model() {
  const { scene } = useGLTF("/tesseract.gltf")
  return <primitive object={scene} />;
}

export function ShowTesseract(props) {
  return (
    <div style = {{height:"60vh", backgroundColor:"#fde2e400"}}>
      <Canvas camera={{position: [0, 0, 2], fov: 100 }}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
