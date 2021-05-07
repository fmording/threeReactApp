import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';

import model from './model/steg1til3_AnimasjonTest_4.glb';
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
        camera={{ position: [30, 30, 30], fov: 45 }}
      >
        <Controls disable={set} />
        <Lights />
        <Suspense fallback={null}>
          <Model path={model} play={play} />
        </Suspense>
      </Canvas>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
