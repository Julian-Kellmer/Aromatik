import Image from 'next/image'

const ServicioSlide = ({ data, onClick }) => {
  return (
    <div onClick={()=>onClick(data)} className=' flex flex-col items-start w-full bg-tercero rounded-2xl p-4 cursor-pointer'>
      <div className='relative w-full aspect-square overflow-hidden rounded-t-2xl rounded-br-4xl object-bottom '>
        <Image
          src={data.imgSit[0]}
          width={700}
          height={700}
          alt={data.nombre}
          className='w-full h-full object-cover'
        />
        <span
          className='
        pr-6 p-2  font-semibold absolute bottom-0 left-0 text-subtitle capitalize bg-tercero text-secondary  rounded-tr-2xl'>
          {data.nombre}
        </span>
      </div>
      <p className='py-4 '>{data.desc}</p>
    </div>
  )
}
export default ServicioSlide
