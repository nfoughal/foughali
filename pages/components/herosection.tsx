import Image from 'next/image'
import { HiArrowDown } from "react-icons/hi"



export default function HeroSection() {
  
  return (
    <section id="home">
          <div className="flex flex-col text-center items-center justify-around animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
            <div className="w-80 h-80">
              <img
                src="/dev-ed-wave.webp"
                alt=""
                className="h-full w-full rounded-full shadow-2xl object-cover  dark:shadow-slate-900 animate-rotate"
              />
            </div>
            <div className="md:mt-2 md:w-3/5">
              <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Nabil!</h1>
              <p className="text-lg mt-4 mb-6 md:text-2xl">
                I&#39;m a{" "}
                <span className="font-semibold text-teal-600">
                  Software Engineer{" "}
                </span>
                based in Morocco. Working towards creating software that
                makes life easier and more meaningful.
              </p>
            
            </div>
          </div>
          <div className="flex flex-row items-center text-center justify-center ">
              <HiArrowDown size={35} className="animate-bounce" />
          </div>
        </section>
  )
}