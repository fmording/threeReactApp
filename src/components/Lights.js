import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Lights = () => {
  const ref = useRef();
  useFrame(() => ref.current);

  return (
    <>
      <ambientLight color={0xffffff} intensity={0.8} />
      <hemisphereLight
        skyColor={0xe7f6ff}
        groundColor={0x5b5b5b}
        intensity={1}
      />
      <group ref={ref}></group>
    </>
  );
};

/*<Shadow
          renderOrder={10}
          color="white"
          stop={0.1}
          scale={[8, 8, 1]}
          position={[0, -1.49, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
        /> */

export default Lights;
