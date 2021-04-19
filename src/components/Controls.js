import { extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import React from 'react';

extend({ OrbitControls });

const Controls = () => {
  return <orbitControls />;
};

export default Controls;
