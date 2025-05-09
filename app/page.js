"use client";

import "./page.css";
import Buttons from "@/components/buttons";
import { TypingAnimation } from "@/components/magicui/typing-animation";


export default function Home() {
  return (
    <main className="pl-2 pr-2 bg-black">
      <section className="h-svh w-full first-layout bg-black text-white flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[100%] max-w-6xl min-w-2xl aspect-video">
            <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-contain filter blur-md">
              <source src="/avatar.webm" type="video/webm" />
            </video>
          </div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="flex flex-col justify-center h-full items-center z-10 relative">
          <h1 className="h1 text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-green-special to-green-light text-transparent bg-clip-text">
            ANDRES MARTINEZ
          </h1>
          <h2 className="h2first text-xl md:text-3xl mb-4 text-gray-300 font-bold"><TypingAnimation>Web Developer</TypingAnimation></h2>

          <Buttons/>
        </div>
      </section>

      <section className="h-svh w-full second-layout">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl text-white">About Me</h2>
          <p className="text-lg text-gray-300">
            I am a passionate full stack developer with experience in building
            web applications using modern technologies.
          </p>
        </div>

      </section>

      <section className="h-svh w-full third-layout">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl text-white">Projects</h2>
          <p className="text-lg text-gray-300">
            Here are some of my projects:
          </p>
          <div className="flex flex-wrap justify-center mt-4">
            <div className="w-1/3 p-2">
              <img
                src="https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 1"
                width={300}
                height={200}
              />
              <p className="text-white">Project 1</p>
            </div>
            <div className="w-1/3 p-2">
              <img
                src="https://images.unsplash.com/photo-1553451166-232112bda6f6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project 2"
                width={300}
                height={200}
              />
              <p className="text-white">Project 2</p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-svh w-full fourth-layout" id="contactame">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl text-white">Contact</h2>
          <p className="text-lg text-gray-300">
            Feel free to reach out to me at:
          </p>
          <p className="text-lg text-gray-300"></p>
        </div>
      </section>
    </main>
  );
}
