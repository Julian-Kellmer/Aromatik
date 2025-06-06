'use client'
import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblacarouselArrowButton'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './style.module.scss'
import Image from 'next/image'

const EmblaCarousel = (props) => {
  const { slides, options, SlideComponent } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <section className='flex gap-4 justify-center items-center'>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />

      <div className={styles.embla}>
        <div
          className={`  ${styles.embla__viewport}`}
          ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((slide, index) => (
              <div
                className={styles.embla__slide}
                key={index}>
                <SlideComponent data={slide}  />
              </div>
            ))}
          </div>
        </div>
      </div>
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </section>
  )
}

export default EmblaCarousel
