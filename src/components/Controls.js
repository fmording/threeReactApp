import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import React, { useEffect, useRef } from 'react';

extend({ OrbitControls });

const Controls = ({ disable, ...props }) => {
  const { camera, gl } = useThree();
  const ref = useRef();
  useFrame(() => ref.current.update());

  useEffect(() => {
    if (disable) {
      ref.current.addEventListener('start', () => disable(true));
      ref.current.addEventListener('end', () => disable(false));
    }
  }, [disable]);

  return (
    <orbitControls
      ref={ref}
      target={[0, 0, 0]}
      enableDamping
      dampingFactor={0.05}
      {...props}
      args={[camera, gl.domElement]}
    />
  );
};

export default Controls;
