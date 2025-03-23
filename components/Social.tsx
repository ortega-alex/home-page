import { socials } from '@/models/data'
import Link from 'next/link'
import React from 'react'

type Props = {
  containerStyle?: string
  iconStyle?: string
}

export const Social: React.FC<Props> = ({ containerStyle = 'flex gap-4', iconStyle = 'text-xl' }) => {
  return (
    <div className={containerStyle}>
      {socials.map(item => (
        <Link key={item.name} href={item.link} target='_blank' rel='noreferrer' className={iconStyle}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
