import React from 'react'
import { Social } from './Social'

export const Footer = () => {
    return (
        <footer className='mt-4'>
            <div className='flex flex-col md:flex-row justify-around items-center gap-4 py-4'>
                <span>© 2025 Marlon Ortega</span>
                <Social iconStyle="w-10 h-10 border border-green-400 rounded-full flex justify-center items-center text-green-400 hover:bg-green-400/90 hover:text-black hover:transition-all duration-500" />
            </div>
        </footer>
    )
}
