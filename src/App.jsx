import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";

function App() {
  return (
    <div className="w-full h-screen bg-neutral-900 relative overflow-hidden">
      {/* Background with presentation style */}
      <div className="fixed inset-0 bg-gradient-to-br from-neutral-900 via-purple-900 to-neutral-900 -z-10"></div>
      <div className="fixed inset-0 -z-10" 
           style={{
             backgroundImage: `
               linear-gradient(45deg, rgba(139, 0, 0, 0.1) 25%, transparent 25%),
               linear-gradient(-45deg, rgba(139, 0, 0, 0.1) 25%, transparent 25%),
               linear-gradient(45deg, transparent 75%, rgba(139, 0, 0, 0.1) 75%),
               linear-gradient(-45deg, transparent 75%, rgba(139, 0, 0, 0.1) 75%)
             `,
             backgroundSize: '60px 60px',
             backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
           }}>
      </div>
      
      <UI />
      <Loader />
      <Canvas shadows camera={{
          position: [0, 0, 3.5],
          fov: 50,
        }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
}

export default App;
