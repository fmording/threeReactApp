import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';

import model from './model/steg1til3_AnimasjonTest_5_mNormalsTextures.glb';
import Controls from './components/Controls';
import Lights from './components/Lights';
import Model from './components/Model';
import Button from './components/Button';
import ModelJSX from './components/ModelJSX';

function App() {
  // Camera control state
  const [set] = useState(false);

  // Button controls
  const [play, setPlay] = useState(false);
  const click = () => {
    setPlay(!play);
  };

  const [step, setStep] = useState('Steg1');

  return (
    <>
      <div className="contentContainer">
        <Button step="Steg1" setStep={setStep} />
        <Button step="Steg2" setStep={setStep} />
        <Button step="Steg3" setStep={setStep} />
      </div>
      <Canvas
        pixelRatio={window.devicePixelRatio}
        gl={{ antialias: true }}
        camera={{ position: [30, 30, 30], fov: 45 }}
      >
        <Controls disable={set} />
        <Lights />
        <Suspense fallback={null}>
          <ModelJSX path={model} step={step} play={play} />
        </Suspense>
      </Canvas>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
