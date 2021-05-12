import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';

import path1 from './models/Steg1_smartSeng.glb';
import path2 from './models/Steg2_smartSeng.glb';
import path3 from './models/Steg3_smartSeng.glb';
import Controls from './components/Controls';
import Lights from './components/Lights';
import Model from './components/Model';
import Button from './components/Button';

function App() {
  // Camera control state
  const [set] = useState(false);

  // Button controls
  const [play, setPlay] = useState(false);
  const click = () => {
    setPlay(!play);
  };

  const [step, setStep] = useState('Steg1');
  const paths = [path1, path2, path3];

  let nr = step.charAt(step.length - 1);
  const path = paths[nr - 1];
  console.log(path);

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
        camera={{ position: [30, 20, 30], fov: 45 }}
      >
        <Controls disable={set} />
        <Lights />
        <Suspense fallback={null}>
          <Model step={step} path={path} play={play} />
        </Suspense>
      </Canvas>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
