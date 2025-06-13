'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Index = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Texto (fade y slide desde la izquierda)
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      // Imágenes (fade + scale)
      gsap.from(imageRef.current.querySelectorAll('img'), {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
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
    <section
      ref={sectionRef}
      className='container mx-auto flex flex-col lg:flex-row md:mt-16 justify-center items-center'>
      <div
        ref={textRef}
        className=' flex lg:flex-1 gap-4 lg:gap-16 flex-col justify-start align-start px-4 lg:px-16 py-8'>
        <h3 className='text-title md:text-mdTitle lg:text-lgTitle font-semibold leading-none   relative text-secondary'>
          Nuestro productos para el hogar :{' '}
          <span className='p-0.5 bg-tercero/60 rounded z-10'> OV-3</span>
        </h3>
        <p className='italic text-p text-start lg:max-w-4/5'>
          Difusor de aromas para pequeñas áreas, cuenta con un sistema de
          aromatización ambiental con nebulizador programable de gran alcance.{' '}
          <br />
          <br />
          Control remoto por Wifi / Bluetooth desde tu celular.
          <br />
          <br />
          Funciona conectado a un tomacorriente común, Potencia 4W Capacidad
          300ml
          <br />
          <br /> Dimensiones: 170 x 77 x 204 mm <br />
          <br />
          Color blanco
        </p>
        <div className='hidden lg:flex gap-16 text-p'>
          <button className='px-4 py-2 bg-tercero text-secondary cursor-pointer rounded font-semibold'>
            ¡Pedí el tuyo!
          </button>
          {/* <button className='px-4 py-2 bg-tercero text-secondary cursor-pointer rounded font-semibold'>
            Obtene tu muestra gratis
          </button> */}
        </div>
      </div>

      <div
        ref={imageRef}
        className='lg:flex-1 w-full h-[35vh] md:h-[50vh] relative'>
        <Image
          src='/home/situacion/OV3-living-mesa.jpg'
          width={500}
          height={500}
          alt='nombre'
          className='w-3/4 md:w-3/5 lg:w-3/4 border-white rounded-4xl border-8 absolute top-0 left-0'
        />
        <Image
          src='/home/situacion/OV3-living-parrilla-1.jpg'
          width={500}
          height={500}
          alt='nombre'
          className='w-3/4 md:w-3/5 border-white rounded-4xl border-8 absolute bottom-0 right-0'
        />
      </div>

      <div className='flex lg:hidden gap-2 text-p justify-center px-2 py-4'>
        <button className='flex-1 px-4 py-2 bg-tercero text-secondary cursor-pointer rounded font-semibold text-[1rem]'>
          ¡Pedí el tuyo!
        </button>
        {/* <button className='px-2 py-2 bg-tercero text-secondary cursor-pointer rounded font-semibold text-[1rem]'>
          Obtene tu muestra gratis
        </button> */}
      </div>
    </section>
  )
}

export default Index
