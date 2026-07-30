import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Model() {
    const { scene } = useGLTF("/models/abc2f51773224d109f8f35ad433642fa.glb");
   return (
        <Center>
            <primitive object={scene} scale={6} />
        </Center>
    );
}

export default function ThreeScene() {
    return (
       <Canvas
    camera={{
        position:[0,2,6],
        fov:30
    }}
>

    <ambientLight intensity={1}/>

    <directionalLight
        position={[5,8,5]}
        intensity={3}
    />

    <Environment preset="studio"/>

    <Model/>

    <OrbitControls

        enableZoom={false}
        enablePan={false}

        autoRotate
        autoRotateSpeed={0.8}

        enableDamping
        dampingFactor={0.05}

        target={[0,0,0]}
        
        minPolarAngle={Math.PI/3}
        maxPolarAngle={Math.PI/2.5}

    />

</Canvas>
    );
}