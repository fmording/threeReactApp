import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const ModelJSX = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(props.path);
  const { ref, mixer, names, actions, clips } = useAnimations(
    animations,
    group
  );
  useEffect(() => {
    console.log(actions);
    actions.Steg2_2TopPanel_Action.play();
  });
  const [step, setStep] = useState('Steg1');

  /* useEffect(() => {
    setStep(props.step);
    const newActions = actions.filter((action) => {
      return action.name.indexOf(step) !== -1;
    });
    newActions.reset().play();
    return;
  });*/

  console.log(actions);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh ref={ref} />
      <group position={[0, 0, 4]} userData={{ name: 'Steg1_EmptyR' }}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1011.geometry}
          material={materials['din7997_4x20_st_h_color_1.012']}
          position={[-1.86, 21.24, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.011' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1015.geometry}
          material={materials['din7997_4x20_st_h_color_1.016']}
          position={[-1.86, 10.01, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.015' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1013.geometry}
          material={materials['din7997_4x20_st_h_color_1.014']}
          position={[-1.86, 10.78, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.013' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1010.geometry}
          material={materials['din7997_4x20_st_h_color_1.011']}
          position={[-1.86, 21.62, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.010' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1017.geometry}
          material={materials['din7997_4x20_st_h_color_1.018']}
          position={[-1.86, 5.76, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.017' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1014.geometry}
          material={materials['din7997_4x20_st_h_color_1.015']}
          position={[-1.86, 10.4, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.014' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1012.geometry}
          material={materials['din7997_4x20_st_h_color_1.013']}
          position={[-1.86, 20.9, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.012' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1018.geometry}
          material={materials['din7997_4x20_st_h_color_1.019']}
          position={[-1.86, 5.04, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.018' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1016.geometry}
          material={materials['din7997_4x20_st_h_color_1.017']}
          position={[-1.86, 6.46, 7.9]}
          userData={{ name: 'L_Skrue_4x20_1.016' }}
        />
      </group>
      <group position={[0, 0, -4]} userData={{ name: 'Steg1_EmptyL' }}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1001.geometry}
          material={materials['din7997_4x20_st_h_color_1.001']}
          position={[-1.86, 21.62, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.001' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1004.geometry}
          material={materials['din7997_4x20_st_h_color_1.005']}
          position={[-1.86, 10.78, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.004' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1007.geometry}
          material={materials['din7997_4x20_st_h_color_1.008']}
          position={[-1.86, 6.46, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.007' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1003.geometry}
          material={materials['din7997_4x20_st_h_color_1.004']}
          position={[-1.86, 20.9, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.003' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1002.geometry}
          material={materials['din7997_4x20_st_h_color_1.003']}
          position={[-1.86, 21.24, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.002' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1009.geometry}
          material={materials['din7997_4x20_st_h_color_1.010']}
          position={[-1.86, 5.04, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.009' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1006.geometry}
          material={materials['din7997_4x20_st_h_color_1.007']}
          position={[-1.86, 10.01, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.006' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1005.geometry}
          material={materials['din7997_4x20_st_h_color_1.006']}
          position={[-1.86, 10.4, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.005' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_1008.geometry}
          material={materials['din7997_4x20_st_h_color_1.009']}
          position={[-1.86, 5.76, -7.9]}
          userData={{ name: 'L_Skrue_4x20_1.008' }}
        />
      </group>
      <group position={[0, 4.5, 0]} userData={{ name: 'Steg2_Empty' }}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.D_Skrue_5x60001.geometry}
          material={nodes.D_Skrue_5x60001.material}
          position={[1.71, 21.58, -8.07]}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          userData={{ name: 'D_Skrue_5x60.001' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.D_Skrue_5x60003.geometry}
          material={nodes.D_Skrue_5x60003.material}
          position={[-1.71, 21.58, 8.07]}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          userData={{ name: 'D_Skrue_5x60.003' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.D_Skrue_5x60004.geometry}
          material={nodes.D_Skrue_5x60004.material}
          position={[1.71, 21.58, 8.07]}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          userData={{ name: 'D_Skrue_5x60.004' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.D_Skrue_5x60002.geometry}
          material={nodes.D_Skrue_5x60002.material}
          position={[-1.71, 21.58, -8.07]}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
          userData={{ name: 'D_Skrue_5x60.002' }}
        />
      </group>
      <group
        name="Steg3_EmptyR"
        position={[0, 0, 1.5]}
        userData={{ name: 'Steg3_EmptyR' }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2001.geometry}
          material={materials['din7997_4x20_st_h_color_1.020']}
          position={[-1.84, 19.97, -8.06]}
          userData={{ name: 'L_Skrue_4x20_2.001' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2005.geometry}
          material={materials['din7997_4x20_st_h_color_1.024']}
          position={[-1.84, 9.38, -8.06]}
          userData={{ name: 'L_Skrue_4x20_2.005' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2003.geometry}
          material={materials['din7997_4x20_st_h_color_1.022']}
          position={[-1.84, 14.92, -8.06]}
          userData={{ name: 'L_Skrue_4x20_2.003' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2004.geometry}
          material={materials['din7997_4x20_st_h_color_1.023']}
          position={[-1.84, 12.44, -8.06]}
          userData={{ name: 'L_Skrue_4x20_2.004' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2002.geometry}
          material={materials['din7997_4x20_st_h_color_1.021']}
          position={[-1.84, 17.63, -8.06]}
          userData={{ name: 'L_Skrue_4x20_2.002' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2006.geometry}
          material={materials['din7997_4x20_st_h_color_1.025']}
          position={[-1.84, 7.39, -8.06]}
          userData={{ name: 'L_Skrue_4x20_2.006' }}
        />
      </group>
      <group position={[0, 0, -1.5]} userData={{ name: 'Steg3_EmptyL' }}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2009.geometry}
          material={materials['din7997_4x20_st_h_color_1.028']}
          position={[-1.84, 14.92, 8.06]}
          userData={{ name: 'L_Skrue_4x20_2.009' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2007.geometry}
          material={materials['din7997_4x20_st_h_color_1.026']}
          position={[-1.84, 19.97, 8.06]}
          userData={{ name: 'L_Skrue_4x20_2.007' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2011.geometry}
          material={materials['din7997_4x20_st_h_color_1.030']}
          position={[-1.84, 9.38, 8.06]}
          userData={{ name: 'L_Skrue_4x20_2.011' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2008.geometry}
          material={materials['din7997_4x20_st_h_color_1.027']}
          position={[-1.84, 17.63, 8.06]}
          userData={{ name: 'L_Skrue_4x20_2.008' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2012.geometry}
          material={materials['din7997_4x20_st_h_color_1.031']}
          position={[-1.84, 7.39, 8.06]}
          userData={{ name: 'L_Skrue_4x20_2.012' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.L_Skrue_4x20_2010.geometry}
          material={materials['din7997_4x20_st_h_color_1.029']}
          position={[-1.84, 12.44, 8.06]}
          userData={{ name: 'L_Skrue_4x20_2.010' }}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['2_Top_Panel'].geometry}
        material={nodes['2_Top_Panel'].material}
        position={[0, 3.5, 0]}
        userData={{ name: '2_Top_Panel' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['1_SidePanel_R'].geometry}
        material={nodes['1_SidePanel_R'].material}
        userData={{ name: '1_SidePanel_R' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['4_Back_Brace_Panel'].geometry}
        material={nodes['4_Back_Brace_Panel'].material}
        userData={{ name: '4_Back_Brace_Panel' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Back_Angle_Iron_R'].geometry}
        material={materials['brushed steel']}
        position={[0, 0, -3]}
        userData={{ name: '7_Back_Angle_Iron_R' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3_Back_Brace_Panel002'].geometry}
        material={nodes['3_Back_Brace_Panel002'].material}
        userData={{ name: '3_Back_Brace_Panel.002' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.E_Treplugg.geometry}
        material={nodes.E_Treplugg.material}
        position={[0, 2, 0]}
        userData={{ name: 'E_Treplugg' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['3_Back_Brace_Panel001'].geometry}
        material={materials['Hvitmalt.001']}
        userData={{ name: '3_Back_Brace_Panel.001' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['1_SidePanel_R001'].geometry}
        material={materials['Hvitmalt.002']}
        userData={{ name: '1_SidePanel_R.001' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.E_Treplugg001.geometry}
        material={nodes.E_Treplugg001.material}
        position={[0, 2, 0]}
        userData={{ name: 'E_Treplugg.001' }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7_Back_Angle_Iron_L'].geometry}
        material={materials['brushed steel.001']}
        position={[0, 0, 3]}
        userData={{ name: '7_Back_Angle_Iron_L' }}
      />
    </group>
  );
};

useGLTF.preload('/Test1_modelDraco.glb');
export default ModelJSX;
