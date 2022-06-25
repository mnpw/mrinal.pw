import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
// import layoutStyle from '../components/layout.module.css'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { Suspense } from 'react'

import { DebugLayerMaterial, LayerMaterial, Depth, Color, Fresnel, Noise, Normal } from 'lamina'
import { Vector3 } from 'three'


function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        {/* <Depth colorB="red" colorA="skyblue" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} /> */}
        <Noise mapping="local" type="white" scale={1000} colorA="white" colorB="beige" mode="subtract" alpha={0.2} />
      </LayerMaterial>
    </mesh>
  )
}


export default function Home() {

  const props = { base: '#ff4eb8', colorA: '#00ffff', colorB: '#ff00e3' }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <blockquote style={{ background: 'rgba(243, 243, 243, 0.29)' }}>
        <div className="body" style={{ background: 'rgba(255, 255, 255, 0.65)' }}>
          <p>
            Welcome to my digital garden.  Feel free to look around.
          </p>
          <p>
            I sow the seeds of my explorations here.  My passions overwhelm my capabilities. This place is an attempt to understand them better.
          </p>
          <p>
            A synthesist, a computer programmer, perhaps a designer, some kind of a craftsman? I consider myself many things.  I take the help of different mediums to tell different kinds of stories.
          </p>
          <p>Thanks for stopping by.</p>
          <p>
            <em>Attuning to the subtleties of storytelling,</em> <br></br>
            Mrinal.
          </p>
        </div>
      </blockquote>
      <section>

      </section>
      <div className={utilStyles.canvas}>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0.5, 10], fov: 2 }}>
          <Suspense fallback={null}>
            <Flower {...props} />
            {/* <Bg {...props} /> */}
            <OrbitControls />
            <directionalLight intensity={2} castShadow shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
            <ambientLight intensity={0.4} />
          </Suspense>
        </Canvas>
      </div>
    </Layout >
  )
}

const vec = new Vector3(0, 0, 0)
function Flower({ base, colorA, colorB }) {
  const mesh = useRef()
  const depth = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.z += delta / 20
    depth.current.origin.set(-state.mouse.y, state.mouse.x, 0)
  })
  return (
    <mesh castShadow receiveShadow rotation-y={Math.PI / 2} scale={[2, 2, 2]} ref={mesh}>
      <torusKnotGeometry args={[0.35, 0.015, 400, 9, 4, 7]} />
      <DebugLayerMaterial color="white" name={'Flower'}>
        <Color color={'white'} />
        <Depth
          far={3}
          origin={[1, 1, 1]}
          colorA="#ff00e3"
          colorB="#00ffff"
          alpha={0.5}
          mode={'multiply'}
          mapping="camera"
        />
        <Depth ref={depth} near={0.25} far={2} colorA={'#purple'} alpha={0.5} mode={'lighten'} mapping={'vector'} />
        <Fresnel mode={'softlight'} />
        {/* <Noise mapping="local" type="simplex" scale={1000} colorA='white' colorB="white" mode={'overlay'} /> */}
      </DebugLayerMaterial>
    </mesh>
  )
}
