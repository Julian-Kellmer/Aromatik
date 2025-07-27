import React from 'react'
import RollingNumber from '../rollingNumbers'

const infoNumber = [
  { number: 25, text: 'Años de experiencia' },
  { number: 300, text: 'Clientes felices' },
  { number: 100, text: 'Frangancias exclusivas' },
  { number: 12, text: 'Servicios mensuales' },
]
const page = () => {
  return (
    <div className='px-4 md:py-16 flex flex-col lg:gap-4 md:px-16 mx-auto gap-12 md:[70vh]'>
      <h5 className='lg:text-lgSubtitle text-[1.6rem] text-center mx-auto text-secondary font-medium leading-none	'>
        En Aromatic creemos que el aroma y el olfato son puntos de inflexión a
        la hora de conquistar un nuevo cliente
      </h5>
      <div className='bg-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  lg:justify-around w-full p py-2 lg:py-8 rounded-4xl'>
        {infoNumber.map((item, index) => {
          return (
            <div
              key={index}
              className='flex flex-col text-center justify-center align-center items-center md:px-10'>
              <div className='flex '>
                <span className='self-center text-[3rem] font-bold text-secondary'>
                  +
                </span>
                <RollingNumber number={item.number} />
                <span className='self-center text-[3rem] font-bold text-secondary'>{item.number === 12 ? 'k':''} </span>
              </div>
              <h6 className='text-[1.3rem] lg:text-[1.2rem] text-secondary'>
                {item.text}
              </h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page
