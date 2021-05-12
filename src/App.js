import React, { Suspense, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';

import Controls from './components/Controls';
import Lights from './components/Lights';
import Model from './components/Model';
import Button from './components/Button';

import path1 from './models/Steg1_smartSeng.glb';
import path2 from './models/Steg2_smartSeng.glb';
import path3 from './models/Steg3_smartSeng.glb';

function App() {
  // Camera control state
  const [set] = useState(false);

  // Button play/pause
  const [play, setPlay] = useState(false);
  const click = () => {
    setPlay(!play);
  };

  //const [step, setStep] = useState('Steg1');
  const [step, setStep] = useState('Steg1');
  const [path, setPath] = useState(path1);
  const [visible, setVisible] = useState([true]);
  const pathChange = (steg, fil, vis) => {
    setStep(steg);
    setPath(fil);
    setVisible(vis);
  };

  /* useEffect(() => {
    const paths = [path1, path2, path3];
    let nr = step.charAt(step.length - 1);
    path.current = paths[nr - 1];
    console.log(path);
  });
*/

  const Button = (props) => {
    return <button className="btn"></button>;
  };

  return (
    <>
      <div className="contentContainer">
        <button
          className="btn"
          onClick={() => {
            pathChange('Steg1', path1, [visible[0], true]);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            pathChange('Steg2', path2, [visible[1], true]);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            pathChange('Steg3', path3, [visible[2], true]);
          }}
        />
      </div>
      {path && (
        <Canvas
          pixelRatio={window.devicePixelRatio}
          gl={{ antialias: true }}
          camera={{ position: [30, 20, 30], fov: 45 }}
        >
          <Controls disable={set} />
          <Lights />
          <Suspense fallback={null}>
            <Model step={step} path={path} play={play} visible={visible} />
          </Suspense>
        </Canvas>
      )}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
