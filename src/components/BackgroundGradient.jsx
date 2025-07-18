import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import * as reactSpring from '@react-spring/three';

export default function BackgroundGradient(){
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed', // Cambiado a fixed para que cubra toda la ventana
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '5'
      }}
      pointerEvents='none'
    >
      <ShaderGradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=0.3&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%231DB954&color2=%23FFDD57&color3=%23006c00&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=0.6&uFrequency=5.5&uSpeed=0.06&uStrength=2.4&uTime=0.2&wireframe=false'
      />
    </ShaderGradientCanvas>
  );
};