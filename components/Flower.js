import * as THREE from 'three'
import React, { useState, useRef, Suspense, useLayoutEffect } from 'react'
import { Canvas, applyProps } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { DebugLayerMaterial, LayerMaterial, Depth, Color, Fresnel, Noise, Normal } from 'lamina'
import { useControls, folder } from 'leva'
import { Vector3 } from 'three'


const vec = new Vector3(0, 0, 0)

export default function Flower({ base, colorA, colorB }) {
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