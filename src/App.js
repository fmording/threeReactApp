import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLoader, Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import thing from './model/firstTryAnimation.glb';
import Controls from './components/Controls';
import Lights from './components/Lights';
import * as THREE from 'three';
import { Clock } from 'three';
import PropTypes from 'prop-types';
import Model from './components/Model';

function App() {
  const [set] = useState(false);

  return (
    <>
      <Canvas
        pixelRatio={window.devicePixelRatio}
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 4], fov: 45 }}
      >
        <Controls disable={set} />
        <Lights />
        <Suspense fallback={null}>
          <Model path={thing} />
        </Suspense>
      </Canvas>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
