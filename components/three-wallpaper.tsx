"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Text } from "@react-three/drei"

function Stars(props: any) {
  const ref = useRef<any>()

  const [sphere] = useMemo(() => {
    const positions = new Float32Array(5000 * 3)

    for (let i = 0; i < 5000; i++) {
      // Generate random spherical coordinates
      const radius = Math.random() * 1.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      // Convert to cartesian coordinates
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      // Ensure no NaN values
      positions[i * 3] = isNaN(x) ? 0 : x
      positions[i * 3 + 1] = isNaN(y) ? 0 : y
      positions[i * 3 + 2] = isNaN(z) ? 0 : z
    }

    return [positions]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#06b6d4" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function FloatingText() {
  const textRef = useRef<any>()

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={textRef}>
      <Text
        position={[0, 0.3, 0]}
        fontSize={0.35}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Bold.ttf"
        outlineWidth={0.015}
        outlineColor="#1e293b"
      >
        ARNAV JOSHI
      </Text>
      <Text
        position={[0, -0.1, 0]}
        fontSize={0.16}
        color="#06b6d4"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Regular.ttf"
        outlineWidth={0.01}
        outlineColor="#1e293b"
      >
        Full-Stack Developer | Cloud & AI Enthusiast
      </Text>
    </group>
  )
}

export function ThreeWallpaper() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-700/40 z-10" />
      <Canvas camera={{ position: [0, 0, 1] }} className="z-0">
        <Stars />
        <FloatingText />
      </Canvas>
    </div>
  )
}
