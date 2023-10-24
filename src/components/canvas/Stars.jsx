import React,{useState,useRef,Suspense} from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import {Points,PointMaterial,Preload} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'


const Stars = (props) => {
  const ref = useRef()

  const sphere = random.inSphere(new Float32Array(1500),{radius:1.5})
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/10
    ref.current.rotation.y -= delta/15
  })
  return (
    <group rotation={[0,0,Math.PI /4]}>
      <Points ref={ref} positions={sphere} stride={7} frustumCulled {...props} >
        <PointMaterial 
        transparent
        color='#f059bf'
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return(
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
      camera={{ position: [0, 0, 9] }}>
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
    </div>
  )

}
export default StarsCanvas