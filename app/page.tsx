'use client';
import dynamic from "next/dynamic";

const Webgpu = dynamic(() => import("./boxes/webgpu"), { ssr: false });

export default function Home() {
  return (
    <div className="main">
      <Webgpu />
    </div>
  );
}
