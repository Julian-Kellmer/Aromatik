'use client'
import React from 'react'
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel'
import FraganciaSlide from '../components/slidesComponent/FraganciaSlide'
import style from '../components/EmblaCarousel/style.module.scss'
import aromas from '../mockdata/fragancias'
const OPTIONS = { align: 'start' }
const index = () => {
  return (
    <section className='px-4 md:px-16 flex flex-col mx-auto gap-6 md:gap-12 md:h-[70vh] w-full mt-16 '>
      <h3 className='text-title md:text-mdTitle lg:text-lgTitle  text-secondary font-semibold leading-none '>
        Nuestras fragancias
      </h3>
      <div>
        <EmblaCarousel
          slides={aromas}
          options={OPTIONS}
          SlideComponent={FraganciaSlide}
        />
      </div>
    </section>
  )
}

export default index
