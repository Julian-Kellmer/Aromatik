'use client'
import React, { useState } from 'react'
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel'
import ServicioSlide from '../components/slidesComponent/ServiciosSlide'
import Modal from '../components/Modal'

const OPTIONS = { align: 'start' }

const infoServicios = [
  {
    id: 5,
    nombre: 'OV10',
    imgSit: [
      '/servicesImg/OV10/situacion/OV10-situacion-1.png',
      '/servicesImg/OV10/situacion/OV10-situacion-2.jpg',
      '/servicesImg/OV10/situacion/OV10-situacion-3.jpg',
    ],
    imgBlanco: [
      '/servicesImg/OV10/blanco/OV10-a.jpg',
      '/servicesImg/OV10/blanco/OV10-b.jpg',
    ],
    desc: 'Difusor de aromas para grandes áreas, cuenta con un sistema de aromatización ambiental con nebulizador programable de gran alcance. Control remoto por Wifi / Bluetooth desde tu celular. Con opción de personalizar el tiempo de funcionamiento: Inicio y finalización de la operación y frecuencia de descarga. Funciona conectado a un toma corriente común mediante un transformador de 12V',
    dimensiones: '300 x 115 x 250 mm',
    potencia: '15W -  Capacidad 1000ml',
    color: 'Blanco o Negro segun dispoinibilidad',
    servicio:
    'Se efectuará cada 30 días, por personal especializado de Aromatic. Realizando el cambio de fragancias e higienización de los equipos.',
  },
  {
    id: 4,
    nombre: 'ND500',
    imgSit: [
      '/servicesImg/ND500/situacion/ND500-situacion-1.jpg',
      '/servicesImg/ND500/situacion/ND500-situacion-2.jpg',
      '/servicesImg/ND500/situacion/ND500-situacion-3.jpg',
    ],
    imgBlanco: [
      '/servicesImg/ND500/blanco/ND500-a.jpg',
      '/servicesImg/ND500/blanco/ND500-b.jpg',
    ],
    desc: 'Difusor de aromas para grandes áreas, cuenta con un sistema de aromatización ambiental con nebulizador programable de gran alcance. Control remoto por Wifi / Bluetooth desde tu celular. Con opción de personalizar el tiempo de funcionamiento: Inicio y finalización de la operación y frecuencia de descarga. Funciona conectado a un toma corriente común mediante un transformador de 12V',
    dimensiones: '190 x 99 x 250 mm',
    potencia: '15W -  Capacidad 1000ml',
    color: 'Blanco ',
    servicio:
    'se efectuará cada 30 días, por personal especializado de Aromatic. Realizando el cambio de fragancias e higienización de los equipos.',
  },
  {
    id: 2,
    nombre: 'Dispenser',
    imgSit: [
      '/servicesImg/dispenser/situacion/dispenser-situacion-1.jpg',
      '/servicesImg/dispenser/situacion/dispenser-situacion-2.jpg',
    ],
    imgBlanco: ['/servicesImg/dispenser/blanco/dispenser-a.jpg'],
    desc: 'Dispensador inteligente de ambientes, para cargas de aerosol. Funciona con dos baterías de 1.5 V. Posee un indicador luminoso de estado de cargas de las mismas y selector de frecuencia de dosificación.',
    servicio:
    ' El servicio se efectuará cada 30 días por personal especializado de Aromatic, en el mismo procederán a realizar el recambio de las fragancias en Aerosol , pilas e higienización de los equipos . Todas nuestras fragancias están habilitadas .',
  },
  {
    id: 3,
    nombre: 'Migitorio',
    imgSit: [
      '/servicesImg/migitorio/situacion/migitorio-situacion-2.jpg',
      '/servicesImg/migitorio/situacion/migitorio-situacion-1.jpg',
    ],
    imgBlanco: ['/servicesImg/migitorio/blanco/migitorio-a.jpg'],
    desc: 'Elimina los malos olores y ejerce una potente acción bacteriostática dentro del inodoro o mingitorio las 24 horas del día controlando la proliferación de bacterias.',
    material: 'Fabricado en Plástico 100% polipropileno.',
    dimensiones: '120 x 70 x 230 mm',
    servicio:
    'se efectuará cada 30 días, por personal especializado de Aromatic. Realizando el cambio de fragancias e higienización de los equipos.',
    color: 'Blanco',
  },
  {
    id: 1,
    nombre: 'Secamanos',
    imgSit: [
      '/servicesImg/secamanos/situacion/secamanos-situacion-1.jpg',
      '/servicesImg/secamanos/situacion/secamanos-situacion-2.jpg',
    ],
    imgBlanco: ['/servicesImg/secamanos/blanco/secamanos_a.jpg'],
    desc: 'Secamanos con Gabinete de acero inoxidable y accionamiento por sensor infrarrojo. Con nuestro servicio te olvidas de comprar secamanos, nosotros cubrimos el equipo y realizamos el mantenimiento mes a mes.',
    potencia: 'Voltaje 110/220 - Potencia 1000W - motor universal 23.000RPM',
    dimensiones: '320 x 290 x 170 mm',
  },
]
const page = () => {
  const [isOpenService, setIsOpenService] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleOpenModal = (service) => {
    setSelectedService(service)
    setIsOpenService(true)
    console.log(isOpenService)
  }

  const handleCloseModal = () => {
    setIsOpenService(false)
    setSelectedService(null)
  }
  return (
    <section id='ourServices' className=' relative px-4 md:px-16 flex flex-col mx-auto  w-full '>
      {isOpenService && (
        <Modal
          data={selectedService}
          onClose={handleCloseModal}
        />
      )}
      <h3 className='text-title md:text-mdTitle lg:text-lgTitle text-secondary font-semibold '>
        Servicios
      </h3>
      <div>
        <EmblaCarousel
          slides={infoServicios}
          options={OPTIONS}
          SlideComponent={(props) => (
            <ServicioSlide
              {...props}
              onClick={handleOpenModal}
            />
          )}
        />
      </div>
      <div className='  text-p w-full flex gap-8 justify-center md:justify-end px-2 py-4'>
        <button className='px-2 py-2 md:px-8 md:py-4  bg-tercero text-secondary cursor-pointer rounded font-semibold text-[1rem] md:text-lg'>
          Contáctanos
        </button>
        <button className='px-2 py-2 md:px-8 md:py-4  bg-tercero text-secondary cursor-pointer rounded font-semibold text-[1rem] md:text-lg'>
          ¡Pedí tu muestra gratis!
        </button>
      </div>
    </section>
  )
}

export default page
