import { Environment } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      {/* Book without animation - stays in place and larger */}
      <group rotation-x={0} position-y={0} scale={1.5}>
        <Book />
      </group>
      
      <Environment preset="studio"></Environment>
      
      <ambientLight intensity={0} />
      
      <directionalLight
        position={[3, 8, 3]}
        intensity={0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      
      <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
