import Image from 'next/image'
import React from 'react'
import profile from "@/assets/profile.png"

export const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      <Image src={profile} alt="Imagen de perfil" className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-darken dark:mix-blend-lighten' />
    </div>
  )
}
