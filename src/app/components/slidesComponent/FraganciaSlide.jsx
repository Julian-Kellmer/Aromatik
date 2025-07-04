import Image from 'next/image'
const FraganciaSlide = ({ data }) => {
  return (
    <div className=' flex flex-col items-start w-full bg-tercero rounded-2xl'>
      <div className='relative w-full aspect-square overflow-hidden  flex justify-center object-bottom '>
        <Image
          src={data.img}
          width={700}
          height={700}
          alt={data.nombre}
          className='object-cover  max-w-[400px] max-h-[400px]  p-4 rounded-4xl '
        />
      </div>
      <div className='flex flex-col gap-2  w-full'>
        <div className='flex w-full p-2  items-center justify-between'>
          <div className=' px-2 flex flex-col items-start gap-2 '>
            <span
              className=' font-semibold text-subtitle capitalize'>
              {data.nombre}
            </span>

            <p className=' md:flex-3 text-black/50'>{data.desc}</p>
          </div>
          <div className=' w-1/6 aspect-square  rounded-full flex items-center justify-center'>
            <img
              src='/logo/logo.svg'
              alt='logo'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default FraganciaSlide
