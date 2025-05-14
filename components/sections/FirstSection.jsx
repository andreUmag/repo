import { TypingAnimation } from "@/components/magicui/typing-animation";
import Buttons from "@/components/buttons";

export default function FirstSection() {
  return (
    <section className="h-svh w-full first-layout bg-black text-white flex justify-center items-center relative overflow-hidden" id="home">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[100%] max-w-6xl min-w-2xl aspect-video">
            <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-contain filter blur-md">
              <source src="/avatar.webm" type="video/webm" />
            </video>
          </div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="flex flex-col justify-center h-full items-center z-10 relative">
          <h1 className="h1 text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-green-special to-green-light text-transparent bg-clip-text">
            ANDRES MARTINEZ
          </h1>
          <h2 className="h2first md:mb-2 text-xl md:text-xl text-gray-300 font-bold"><TypingAnimation>Web Developer</TypingAnimation></h2>

          <Buttons />
        </div>
      </section>
  )
}
