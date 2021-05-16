import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

const Environment = ({ rotateY }) => {
  const ref = useRef();
  useFrame(() => ref.current);

  let floor = (
    <group>
      <mesh ref={ref} receiveShadow rotationQuaternion={null}>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#272727" />
      </mesh>
    </group>
  );
  floor.rotation.y = rotateY;
  return <>{floor}</>;
};

export default Environment;
