"use client";

import LandingPage from "@/app/components/organisms/LandingPage/LandingPage";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

export default function Home() {
  return (
    <main className="flex p-0 m-0 tulir-site h-full w-full">
        <video className='videoTag' autoPlay loop muted>
            <source src={`assets/Dynamic_BG.mp4`} type='video/mp4' />
        </video>
        <LandingPage />
    </main>
  );
}
