// components/Footer.jsx
const Footer = () => {
  return (
    <footer
      id='footer'
      className='bg-[#f8ebf8] text-black py-10 px-6 md:px-12 mt-8'>
      {/* Sección principal */}
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-8 border-b border-black/40 pb-8'>
        {/* Columna izquierda: Datos de contacto */}
        <div>
          <h3 className='font-semibold text-lg mb-4'>Aromatic</h3>
          <div className='flex flex-col gap-2 text-sm'>
            <div className='flex justify-between max-w-[250px]'>
              <span className='font-medium'>E-mail</span>
              <span>ventas@aromaticargentina.com</span>
            </div>
            <div className='flex justify-between max-w-[250px]'>
              <span className='font-medium'>Telefono</span>
              <span>+54 11 7105 0112</span>
            </div>
            <div className='flex justify-between max-w-[250px]'>
              <span className='font-medium'>Instagram</span>
              <span>@Aromatic.argentina</span>
            </div>
            <div className='flex justify-between max-w-[250px]'>
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
            <a
              href='#contacto'
              className='bg-[#3c0a4d] text-white text-sm px-4 py-2 rounded-md text-center'>
              Contactá tu prueba tu gratis
            </a>
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
