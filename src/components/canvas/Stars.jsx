import {Suspense, useState, useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import {Points, PointMaterial} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15

  })

  const sphere = random.inSphere(new Float32Array(10000), {radius: 1.2})
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
        <PointMaterial 
          transparent
          size={0.002} 
          sizeAttenuation={true} 
          color="#f272c8"
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = (props) => {
  return(
    <div className="absolute h-auto w-full inset-0 z-[-1]">
      <Canvas camera={{position: [0,0,1]}}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas