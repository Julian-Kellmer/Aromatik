'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const ProductModal = ({ data, onClose }) => {
  if (!data) return null

  const allImages = [...(data.imgSit || []), ...(data.imgBlanco || [])]
  const [selectedImage, setSelectedImage] = useState(allImages[0] || '')

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4'>
      <div className='relative w-full max-w-5xl max-h-[95vh] bg-white rounded-3xl shadow-lg overflow-y-auto md:overflow-hidden p-0'>
        
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-50'>
          <X size={24} />
        </button>

        {/* Imagen principal */}
        <div className='relative w-full aspect-[4/3] md:rounded-t-3xl overflow-hidden'>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt={data.nombre}
              fill
              className='object-contain bg-white'
            />
          )}

          {/* Thumbnails - Desktop */}
          <div className='hidden md:flex absolute bottom-4 right-4 p-2 rounded-lg bg-white/80 shadow gap-2'>
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 relative rounded-lg overflow-hidden border-2 transition ${
                  img === selectedImage
                    ? 'border-primary'
                    : 'border-transparent hover:border-gray-300'
                }`}>
                <Image
                  src={img}
                  alt={`Vista ${idx + 1}`}
                  fill
                  className='object-cover'
                />
              </button>
            ))}
          </div>

          {/* Título - siempre arriba a la izquierda */}
          <div className='absolute top-4 left-4 sm:top-8 sm:left-8 bg-primary/80 p-2 sm:p-4 rounded-lg flex items-center gap-2 sm:gap-4'>
            <h1 className='text-base sm:text-2xl font-semibold text-secondary capitalize'>
              {data.nombre}
            </h1>
            <div className='w-6 h-6 sm:w-8 sm:h-8'>
              <Image
                alt='Logo Aromatic'
                width={100}
                height={100}
                src={'/logo/logo.svg'}
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Thumbnails - Mobile (arriba fijo) */}
        <div className='md:hidden sticky top-0 bg-white z-40 flex flex-wrap gap-2 justify-center p-3 border-b'>
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`w-12 h-12 relative rounded-lg overflow-hidden border-2 transition ${
                img === selectedImage
                  ? 'border-primary'
                  : 'border-transparent hover:border-gray-300'
              }`}>
              <Image
                src={img}
                alt={`Vista ${idx + 1}`}
                fill
                className='object-cover'
              />
            </button>
          ))}
        </div>

        {/* Contenido (Descripción + Especificaciones) */}
        <div className='sm:absolute sm:bottom-0 sm:w-1/2 w-full p-4 sm:p-6 bg-tercero'>
          <ul className='list-none space-y-2 text-sm sm:text-base'>
            {data.desc && (
              <li className='font-semibold text-secondary'>
                <b>Descripción:</b> {data.desc}
              </li>
            )}
            {data.dimensiones && (
              <li className='font-semibold text-secondary'>
                <b>Dimensiones:</b> {data.dimensiones}
              </li>
            )}
            {data.potencia && (
              <li className='font-semibold text-secondary'>
                <b>Potencia:</b> {data.potencia}
              </li>
            )}
            {data.material && (
              <li className='font-semibold text-secondary'>
                <b>Material:</b> {data.material}
              </li>
            )}
            {data.color && (
              <li className='font-semibold text-secondary'>
                <b>Color:</b> {data.color}
              </li>
            )}
            {data.servicio && (
              <li className='font-semibold text-secondary'>
                <b>Servicio:</b> {data.servicio}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
