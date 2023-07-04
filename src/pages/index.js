import Image from 'next/image'
import { Inter, Inter_Tight } from 'next/font/google'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { IconEyeOff, IconSwords } from '@tabler/icons-react'
import { IconBrain } from '@tabler/icons-react'
import { IconBug } from '@tabler/icons-react'
import { IconRocket } from '@tabler/icons-react'
import Marquee from 'react-fast-marquee'
import { IconDeviceIpadHorizontalQuestion } from '@tabler/icons-react'
import { TwitchIcon } from '@/components/TwitchIcon'
import MouseEffect from '@/components/Mouse'
import { Card } from '@/components/Card'
import { PruebasMarquee } from '@/components/Pruebas'

const inter = Inter({ weight: ['400', '700'], subsets: ['latin'] })
const interTight = Inter_Tight({ weight: ['800'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MouseEffect />
      <div className={`${inter.className} fixed flex items-center justify-center w-screen uppercase opacity-50 top-2`}>
        <PruebasMarquee />
      </div>

      <main className={`${inter.className} max-w-7xl m-auto pb-20`}>
        <div>
          <div className="block w-full h-full">
            <header className="flex flex-col items-center justify-center m-auto mb-20">
              <div className="relative">
                <Logo />
                <div className="absolute inset-0 opacity-80 contrast-125 blur-2xl animate-pulse">
                  <Logo />
                </div>
              </div>

              <div className="mt-12">
                <h1 className={`${interTight.className} text-white text-6xl text-center font-extrabold`}>
                  Donde programadores y <br />
                  <span className="text-transparent bg-gradient-to-r from-red-200 to-red-300 bg-clip-text">
                    creadores de contenido
                  </span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-yellow-200 to-yellow-300 bg-clip-text">
                    compiten.
                  </span>
                </h1>
              </div>
            </header>

            <div className="flex flex-col items-center justify-center flex-1 mt-8 text-center">
              <h3 className="text-5xl font-bold text-[#ffff06]">25 Julio 2023</h3>
              <div className="flex justify-center mt-2">
                <h4 className="flex items-center gap-x-2">
                  <a
                    className="flex items-center text-2xl font-semibold text-purple-400 transition gap-x-2 hover:scale-110 hover:underline"
                    href="https://twitch.tv/midudev"
                    target="_blank"
                  >
                    <TwitchIcon className="w-8" />
                    twitch.tv/midudev
                  </a>
                </h4>
              </div>
            </div>

            <footer className="flex flex-col w-full max-w-xs px-12 pb-32 m-auto mt-12 md:px-4 justify-evenly gap-y-4">
              <a
                className="flex items-center justify-center px-4 py-2 text-sm text-white transition font-sm gap-x-1 hover:scale-110 hover:underline"
                href="mailto:miduga@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <IconRocket className="w-6 h-6" />
                Patrocinar como empresa
              </a>
            </footer>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-16">
          <article className="relative p-8 overflow-hidden rounded-lg aspect-square">
            <h2 className={`${interTight.className} text-white text-6xl mb-10`}>
              Pruebas y
              <br />
              competición
            </h2>

            <p className="mb-8 text-xl text-yellow-100 opacity-85">
              Los equipos se enfrentarán en pruebas de programación a ciegas, lógica de programación, preguntas técnicas
              y mucho más.
            </p>

            <div className="relative">
              <div className="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent via-black/30 to-black"></div>
              <img className="shadow-lg " alt="Captura de pantalla de CSS Battle" src="/img/css-battle.jpg" />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent via-black/30 to-black"></div>

            <div className="absolute inset-0 -z-20">
              <svg
                className="opacity-60 backdrop-blur-lg"
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17_62)">
                  <g filter="url(#filter0_f_17_62)">
                    <path d="M128.6 0H0V322.2L81 310L128.6 0Z" fill="#4D008A"></path>
                    <path d="M0 322.2V400H240H320L81 310L0 322.2Z" fill="#CD03FF"></path>
                    <path d="M320 400H400V78.75L81 310L320 400Z" fill="#B5BFF1"></path>
                    <path d="M400 0H128.6L81 310L400 78.75V0Z" fill="#611A9A"></path>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_f_17_62"
                    x="-159.933"
                    y="-159.933"
                    width="719.867"
                    height="719.867"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_62"></feGaussianBlur>
                  </filter>
                </defs>
              </svg>
            </div>
          </article>
          <article className="relative p-8 overflow-hidden rounded-lg aspect-square">
            <h2 className={`${interTight.className} text-white text-6xl mb-10`}>
              4 equipos,
              <br />4 capitanes
            </h2>
            <p className="text-xl text-yellow-100 opacity-85">
              4 creadores de contenido serán los capitanes de los equipos y competirán por ser los mejores.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
            <svg
              className="absolute inset-0 w-full opacity-60 backdrop-blur-lg -z-20"
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_17_17)">
                <g filter="url(#filter0_f_17_17)">
                  <path d="M128.6 0H0V322.2L51.5 67.5L128.6 0Z" fill="#EB03FF"></path>
                  <path d="M0 322.2V400H240H320L51.5 67.5L0 322.2Z" fill="#FF0F9F"></path>
                  <path d="M320 400H400V78.75L51.5 67.5L320 400Z" fill="#3A0D84"></path>
                  <path d="M400 0H128.6L51.5 67.5L400 78.75V0Z" fill="#FAD8F4"></path>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_17_17"
                  x="-160.333"
                  y="-160.333"
                  width="720.666"
                  height="720.666"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feGaussianBlur stdDeviation="80.1666" result="effect1_foregroundBlur_17_17"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </article>
        </div>
      </main>
    </>
  )
}
