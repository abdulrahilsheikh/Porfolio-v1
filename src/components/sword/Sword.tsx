import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Vector3 } from "three";

const Model = () => {
	const model = useLoader(
		GLTFLoader,
		`../../../${
			import.meta.env.DEV ? "public/" : "Portfolio-v1/"
		}models/handpainted_sword/scene.gltf`
	);
	const { mouse } = useThree();

	// useFrame((data) => {
	// 	const vect = new Vector3();
	// 	data.camera.position.lerp(
	// 		vect.set(-mouse.x * 0.05, -mouse.y * 0.25, 0),
	// 		0.025
	// 	);
	// 	data.camera.lookAt(0, 50, 0);
	// });

	return (
		<>
			<primitive
				object={model.scene}
				position={[-2.5, -15, 0]}
				scale={1}
			/>
			;
		</>
	);
};
function Rig() {
	const { camera, mouse } = useThree();
	const vec = new Vector3();

	return useFrame(() => {
		camera.position.lerp(vec.set(-mouse.x * 5, 0, 0), 0.075);
		camera.lookAt(0, 0, 0);
	});
}
export function Sword() {
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
						minDistance={40}
					/>
					<Environment preset="sunset" />
				</Suspense>
			</Canvas>
		</div>
	);
}
