"use client";

import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Experience } from "./components/Experience/Experience";

export default function Home() {
  return (
    <main className="flex p-0 m-0 tulir-site h-full w-full">
      <Canvas>
        <Experience />
      </Canvas>
    </main>
  );
}
