import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";

function App() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/audios/background.mp4" type="video/mp4" />
      </video>
      
      <UI />
      <Loader />
      <Canvas 
        className="absolute inset-0 z-10"
        shadows 
        camera={{
          position: [0, 0, 3.5],
          fov: 50,
        }}
        style={{ background: 'transparent' }}
      >
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
