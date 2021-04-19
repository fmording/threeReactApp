import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLoader, Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import thing from './model/firstTryAnimation.glb';
import Controls from './components/Controls';
import Lights from './components/Lights';

function Scene() {
  const gltf = useLoader(GLTFLoader, thing);
  return <primitive object={gltf.scene} />;
}

function App() {
  const [active, set] = useState(false);

  return (
    <>
      <Canvas
        noEvents={active}
        pixelRatio={window.devicePixelRatio}
        gl={{ antialias: true }}
        className="mainContainer"
        camera={{ position: [0, 0, 4], fov: 70 }}
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
