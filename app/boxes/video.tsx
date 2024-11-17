
import {Sphere, useVideoTexture } from "@react-three/drei";
import { BackSide } from "three/webgpu";
export default function VideoPlayer() {

    // Create video texture from video element
    const videoTexture = useVideoTexture('/5916479-uhd_3840_2160_24fps.mp4');
    return <Sphere scale={[125, 125, 125]} rotation={[0, 90, 0]} >
        <meshBasicMaterial map={videoTexture} side={BackSide} />
    </Sphere>
}