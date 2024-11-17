'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import VideoPlayer from "./video";

export default function Webgl() {

    return (
        <Canvas camera={{ position: [0, 0, 35] }} >
            <VideoPlayer />
            <OrbitControls />
        </Canvas>
    );
}
