"use client"

import { routes } from '@/models/routes'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Nav } from './Nav'
import { Button } from './ui/button'
import { MobileNav } from './MobileNav'

export const Header = () => {

    const { theme, setTheme } = useTheme()

    return (
        <header className='p-4 m-4 md:mx-32 md:my-12 sticky top-12 bg-black/20 rounded-lg z-10'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href={routes.about}>
                    <h1 className='text-4xl font-semibold'>
                        MO
                    </h1>
                </Link>
                <div className="flex justify-between items-center gap-4 md:gap-8">
                    <div className='hidden md:flex'>
                        <Nav />
                    </div>
                    <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 transition-all duration-300 dark:rotate-90 dark:scale-0' />
                        <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100' />
                    </Button>
                    <div className='md:hidden'>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}
