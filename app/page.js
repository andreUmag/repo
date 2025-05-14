"use client";

import "./page.css";
import FirstSection from "@/components/sections/FirstSection";
import SecondSection from "@/components/sections/SecondSection";

export default function Home() {
  return (
    <main className="pl-2 pr-2 bg-black">
      
      <FirstSection/>

      <SecondSection/>
      
      <section className="h-svh w-full third-layout" id="proyectos">
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
