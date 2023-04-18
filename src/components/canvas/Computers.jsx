import {Suspense, useEffect, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei'
 import CanvasLoader from '../loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight 
        intensity={0.8}  
        groundColor="black"/>
      <pointLight 
        intensity={1} />

      <SpotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
      />
      <primitive 
        object={computer.scene} 
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ?[0, -2.3, -1.6] : [0, -3.25, -1.5]}/>

    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position:[20, 3, 5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={-0.8}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
  }
export default ComputersCanvas