import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLoader, Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import thing from './model/firstTryAnimation.glb';
import Controls from './components/Controls';
import Lights from './components/Lights';
import * as THREE from 'three';
import { Clock } from 'three';

function Scene() {
  const gltf = useLoader(GLTFLoader, thing);
  const mixer = new THREE.AnimationMixer(gltf);

  gltf.animations.forEach((clip) => mixer.clipAction(clip).play());

  let clock = new THREE.Clock();
  if (gltf) {
    mixer.update(clock.getDelta());
  }

  return <primitive object={gltf.scene} />;
}

function App() {
  const [set] = useState(false);

  //thing.animations.forEach((clip) => mixer.clipAction(clip).play());

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
          <Scene />
        </Suspense>
      </Canvas>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
