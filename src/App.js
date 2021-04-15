import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/GLTFLoader.js'

function App() {
  const { useRef, useEffect, useState } = React;
  const mount = useRef(null);
  const [isAnimating, setAnimating] = useState(true);
  const controls = useRef(null);

  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    let frameId;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;

    // Gridhelper ------------ TEMPORARY ---------------------
    const gridHelp = new THREE.GridHelper(100, 10);
    scene.add(gridHelp);

    // Lights
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);
    let spot = new THREE.SpotLight(0xffffff);
    spot.castShadow = true;
    scene.add(spot);

    // Geometry
    // Trying to import top and side panels as GLTF format
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
  async function loaderFunc () {
    
  }
    const model = await loader.loadAsync('./model/topAndSidePanels_NoAnim.glb');

 
    scene.add(cube);

    // Plane
    let geometry = new THREE.PlaneGeometry(5, 5, 10, 10);
    let material = new THREE.MeshPhongMaterial({
      color: 0xffff00,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);

    scene.add(plane);

    // Camera settings
    camera.position.x = 5;
    camera.position.y = 4;
    camera.position.z = 5;
    camera.lookAt(0, 0, 0);

    renderer.setClearColor('#000000');
    renderer.setSize(window.innerWidth, window.innerHeight);

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      width = mount.current.clientWidth;
      height = mount.current.clientHeight;
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderScene();
    };

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    mount.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    start();

    controls.current = { start, stop };

    return () => {
      stop();
      window.removeEventListener('resize', handleResize);

      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      controls.current.start();
    } else {
      controls.current.stop();
    }
  }, [isAnimating]);

  return (
    <div
      ref={mount}
      onClick={() => setAnimating(!isAnimating)}
      className="tryDiv"
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
