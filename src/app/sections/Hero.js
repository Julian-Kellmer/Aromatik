'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Texto principal (titulo + párrafo)
      gsap.from(contentRef.current, {
        delay: 1,
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Botón
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        delay: 0.4,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='hero'>
      <div
        ref={sectionRef}
        className='px-4 w-full h-[95vh] md:h-screen relative bg-no-repeat bg-cover bg-bottom md:rounded-b-[3rem] rounded-b-xl'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75)), url('/OV10-situacion-2.jpg')`,
          objectFit: 'cover',
          backgroundPosition: 'top',
        }}>
        <div className='flex flex-col z-50 justify-between md:justify-start pb-[10%] pt-[8rem] md:pt-[10%] lg:items-center content-center w-full h-full gap-8 leading-none'>
          <div
            ref={contentRef}
            className='gap-2 flex flex-col items-start lg:items-center'>
            <h2 className='text-title tracking-tighter md:text-mdTitle lg:text-lgTitle text-primary'>
              Aromas únicos, experiencias reales
            </h2>
            <p className='text-white/80 text-[1.2rem] lg:text-lgSubtitle max-w-full lg:max-w-3/4 font-light lg:text-center'>
              Creamos y transformamos espacios con una escencia auténtica y
              duradera
            </p>
          </div>
          <button
            ref={buttonRef}
            className='px-6 py-2 lg:py-2 bg-tercero text-secondary font-regular rounded-xl md:text-p text-lg cursor-pointer self-end lg:self-center'>
            <a href='#aboutUs'>Ver más</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Page
