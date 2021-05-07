import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.path);
  let mixer;

  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    /*model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      //action.setLoop(THREE.LoopPingPong);
      props.play ? action.stop() : action.play();
    });*/

    let actualAnimations = model.animations.filter((clip) => {
      return (
        clip.name.indexOf('Steg2') !== -1 || clip.name.indexOf('Steg1') !== -1
      );
    });
    console.log(actualAnimations);
    actualAnimations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      props.play ? action.stop() : action.play();
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
