import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';

import thing from './model/firstTryAnimation.glb';
import Controls from './components/Controls';
import Lights from './components/Lights';
import Model from './components/Model';
import Button from './components/Button';

function App() {
  const [set] = useState(false);

  const [play, setPlay] = useState(false);
  const click = () => {
    setPlay(!play);
  };

  return (
    <>
      <Button onClick={click} />
      <Canvas
        pixelRatio={window.devicePixelRatio}
        gl={{ antialias: true }}
        camera={{ position: [5, 2, 4], fov: 45 }}
      >
        <Controls disable={set} />
        <Lights />
        <Suspense fallback={null}>
          <Model path={thing} play={play} />
        </Suspense>
      </Canvas>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
