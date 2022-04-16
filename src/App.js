import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, ...props }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

function Plane(props) {
  const [ref] = usePlane(() => ({ mass: 0, ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

function App() {
  return (
    <Canvas style={{ width: "800px", height: "800px" }}>
      <ambientLight />
      <pointLight position={[10, 10, 15]} />
      <Physics>
        <Cube rotation={[0.4, 10, -15]} />
        <Cube position={[1.5, 1, 1]} rotation={[0.4, 10, 5]} />
        <Cube position={[-1.5, 1, 1]} rotation={[-0.8, 10, 5]} />
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} />
      </Physics>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
