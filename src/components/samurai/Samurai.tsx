import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as samuraiModel from "../../../public/models/samurai/scene.gltf";
import { Vector3 } from "three";

// import samuraiModel from "../../../public/models/samurai/scene.gltf";

const Model = () => {
  const model = useLoader(
    GLTFLoader,
    `../../../${
      import.meta.env.DEV ? "public/" : "Portfolio-v1/"
    }models/samurai/scene.gltf`
  );
  const { mouse } = useThree();

  useFrame((data) => {
    const vect = new Vector3();
    data.camera.position.lerp(vect.set(-mouse.x * 5, -mouse.y * 5, 0), 0.05);
    data.camera.lookAt(0, 0, 50);
  });

  return (
    <>
      <primitive object={model.scene} position={[0, -120, 0]} scale={1} />;
    </>
  );
};
function Rig() {
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(-mouse.x * 500, 0, 0), 0.025);
    camera.lookAt(0, 0, 0);
  });
}
export function Samurai() {
  return (
    <div className={`absolute left-0 right-0 top-0 bottom-0`}>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <Rig />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 3.5}
            maxAzimuthAngle={Math.PI / 8}
            minAzimuthAngle={-Math.PI / 8}
            minDistance={300}
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
