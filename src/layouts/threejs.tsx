import { Canvas } from '@react-three/fiber';
import { Outlet } from 'react-router-dom';

const Threejs = () => {
  return (
    <Canvas>
      <Outlet />
    </Canvas>
  );
};

export default Threejs;
