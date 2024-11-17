'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { WebGPURenderer } from "three/webgpu";
import VideoPlayer from "./video";

export default function Webgpu() {
  return (
    <Canvas camera={{ position: [0, 0, 35] }} gl={c => {
      const r = new WebGPURenderer({ canvas: c as HTMLCanvasElement, forceWebGL: false });
      // Fix threejs bug
      //@ts-ignore
      r.xr.addEventListener = () => { };
      setTimeout(() => console.log("GL in use", r.backend.constructor.name), 5000);
      return r;
    }}>
      <VideoPlayer />
      <OrbitControls />
    </Canvas>
  );
}
