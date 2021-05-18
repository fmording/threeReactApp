import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';

import Controls from './components/Controls';
import Lights from './components/Lights';
import Model from './components/Model';
import Button from './components/Button';

import path1 from './models/Steg1_smartSeng.glb';
import path2 from './models/Steg2_smartSeng.glb';
import path3 from './models/Steg3_smartSeng.glb';

import logo from './logo.png';
import {
  FaInfoCircle,
  FaBars,
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';

function App() {
  // Camera control state
  const [set] = useState(false);

  // Button play/pause --------------------------
  // const [play, setPlay] = useState(false);
  // const click = () => {
  //   setPlay(!play);
  // }; -----------------------------------------

  //const [step, setStep] = useState('Steg1');
  const [step, setStep] = useState('Steg1');
  const [path] = useState([path1, path2, path3]);
  const [visible, setVisible] = useState([true, false, false]);

  /* useEffect(() => { --------------------------
    const paths = [path1, path2, path3];
    let nr = step.charAt(step.length - 1);
    path.current = paths[nr - 1];
    console.log(path);
  }); -------------------------------------------
*/

  return (
    <>
      <div className="contentWrapper">
        <header>
          <img src={logo} alt="Smartfurniture hjem" className="logo" />
          <button
            className="btn"
            style={{
              width: '120px',
              height: '80%',
              fontSize: '1em',
            }}
          >
            Kontakt Oss
          </button>
        </header>
        <div className="icons">
          <FaInfoCircle className="icon" />
          <FaBars className="icon" />
        </div>
        <div className="stepSection">
          <h2 id="steg">Steg</h2>
          <FaChevronLeft className="icon" />
          <Button
            className="btn"
            setVisible={setVisible}
            setStep={setStep}
            path={path1}
            step="1"
            visible={visible}
          />
          <Button
            className="btn"
            setVisible={setVisible}
            setStep={setStep}
            path={path2}
            step="2"
            visible={visible}
          />
          <Button
            className="btn"
            setVisible={setVisible}
            setStep={setStep}
            path={path3}
            step="3"
            visible={visible}
          />
          <FaChevronRight className="icon" />
        </div>
      </div>
      {path && (
        <Canvas
          shadows
          pixelRatio={window.devicePixelRatio}
          gl={{ antialias: true }}
          camera={{ position: [30, 20, 30], fov: 65 }}
        >
          <Controls disable={set} />
          <Lights />
          <gridHelper args={[1000, 100, `#cfcfcf80`, `#8b8b8b80`]} />
          <Suspense fallback={null}>
            <Model step="Steg1" path={path[0]} visible={visible} />
            <Model step="Steg2" path={path[1]} visible={visible} />
            <Model step="Steg3" path={path[2]} visible={visible} />
          </Suspense>
        </Canvas>
      )}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
