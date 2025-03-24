import Image from 'next/image'

export const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <Image src='/profile.jpg' width={298} height={298} alt="Imagen de perfil" className='w-[298px] xl:w-[470px] rounded-3xl  mix-blend-exclusion dark:mix-blend-difference' />
    </div>
  )
}
