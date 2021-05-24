import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Lights = () => {
  const ref = useRef();
  useFrame(() => ref.current);

  return (
    <>
      <group ref={ref}>
        <ambientLight color={0xffffff} intensity={0.8} castShadow />
        <hemisphereLight
          skyColor={0xe7f6ff}
          groundColor={0x5b5b5b}
          intensity={1}
          castShadow
        />
        <directionalLight position={[10, 8, 0]} castShadow />
      </group>
    </>
  );
};

export default Lights;
