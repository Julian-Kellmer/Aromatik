'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AromaticNumbers from '../components/AromaticNumbers/page'

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const titleRef = useRef(null)
  const paragraphsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      })

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
      })

      paragraphsRef.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='px-2 py-4 lg:px-16 lg:mt-8 gap-16 flex flex-col'>
      <div className='flex flex-col md:flex-row justify-center gap-4 '>
        <div className='flex justify-center lg:justify-start flex-1 order-2 lg:order-1'>
          <Image
            ref={imageRef}
            alt='square'
            src={'/OV3-living-mate.jpg'}
            width={500}
            height={500}
            className='w-full h-auto rounded-2xl object-cover lg:max-w-[800px]'
          />
        </div>
        <h3
          ref={titleRef}
          className='md:px-8 order-1 md:hidden self-start text-title lg:text-lgTitle tracking-tighter font-medium'
        >
          Sobre nosotros
        </h3>
        <div className='flex flex-col text-black flex-1 justify-center order-3 gap-4'>
          <h3
            ref={titleRef}
            className='hidden md:block text-title md:text-mdTitle lg:text-lgTitle font-medium leading-none'
          >
            Sobre nosotros
          </h3>
          <div className='flex flex-col gap-4 text-[1.2rem] lg:text-p font-light'>
            {[
              'Aromatic nace en 1997 con el propósito de mejorar la experiencia olfativa en las personas. Nos especializamos en servicios de aromatización de ambientes con foco principal en el servicio y la experiencia. Con más de 300 clientes y más de 12.000 servicios concretados mensualmente, somos una empresa líder en servicios de aromatización.',
              'Brindamos excelencia y calidad, tanto como para el usuario como para la empresa. Actualmente trabajamos con diferentes laboratorios especializados en el rubro, de primera calidad, y contamos con muchísimas fragancias dentro de nuestra cartera.',
              'En Aromatic creemos que el aroma y el olfato son puntos de inflexión a la hora de conquistar un nuevo cliente.',
            ].map((text, i) => (
              <p key={i} ref={el => (paragraphsRef.current[i] = el)}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <AromaticNumbers />
    </section>
  )
}

export default Page
