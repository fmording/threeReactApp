import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);

  let mixer;

  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      props.play ? action.play() : action.stop();
      console.log(props.play);
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return (
    <>
      <primitive object={model.scene} scale={props.scale} />
    </>
  );
};

export default Model;
