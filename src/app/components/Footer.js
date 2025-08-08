'use client'
import Image from 'next/image'
const Footer = () => {
  const handleWhatsAppRedirect = ({ message }) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/+5491171050112?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }
  return (
    <footer
      id='footer'
      className='bg-[#f8ebf8] text-black pb-10 pt-4 px-6 md:px-12 mt-8'>
      {/* Sección principal */}
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8 border-b border-black/40 pb-8'>
        {/* Columna izquierda: Datos de contacto */}
        <div className='w-full flex-col justify-between'>
          <div className='flex'>
            <Image
              alt='Logo'
              src='/logo/logoremovedbg.png'
              href='#home'
              className='text-secondary font-semibold text-xl'
              width={100}
              height={0}
            />
            <Image
              alt='Logo'
              src='/logo/logo.svg'
              href='#home'
              className='text-secondary font-semibold text-xl'
              width={20}
              height={0}
            />
          </div>
          <div className='flex flex-col gap-2 text-sm px-2'>
            <div className='flex justify-between w-full'>
              <span className='font-medium'>E-mail</span>
              <span>ventas@aromaticargentina.com</span>
            </div>
            <div className='flex justify-between w-w-full'>
              <span className='font-medium'>Telefono</span>
              <span>+54 11 7105 0112</span>
            </div>
            <div className='flex justify-between w-full'>
              <span className='font-medium'>Instagram</span>
              <span>@Aromatic.argentina</span>
            </div>
            <div className='flex justify-between w-full'>
              <span className='font-medium'>TikTok</span>
              <span>@Aromatic.argentina</span>
            </div>
          </div>
        </div>

        {/* Espacio vacío para balance visual en desktop */}
        <div className='hidden md:block'></div>

        {/* Columna derecha: Call to action */}
        <div className='space-y-4'>
          <h4 className='text-lg font-semibold leading-snug'>
            Aromatiza tu espacio ahora con Aromatic
          </h4>
          <div className='flex flex-col sm:flex-row gap-3'>
            <button
              onClick={() =>
                handleWhatsAppRedirect({
                  message: 'Hola estoy interesado, que tengan buen dia.',
                })
              }
              href='#contacto'
              className='bg-[#3c0a4d] text-white text-sm px-4 py-2 rounded-md text-center cursor-pointer'>
              Contactá tu prueba tu gratis
            </button>
            {/* <a
              href="#contacto"
              className="text-sm underline underline-offset-2 text-[#3c0a4d]"
            >
              Contactanos
            </a> */}
          </div>
        </div>
      </div>

      {/* Menú inferior */}
      <div className='max-w-6xl mx-auto mt-6 flex flex-wrap justify-center gap-6 text-sm text-[#3c0a4d] font-medium'>
        <a href='#servicios'>Servicios</a>
        <a href='#quienes'>¿Quienes somos?</a>
        <a href='#fragancias'>Fragancias</a>
        <a href='#contacto'>Contacto</a>
      </div>
    </footer>
  )
}

export default Footer
