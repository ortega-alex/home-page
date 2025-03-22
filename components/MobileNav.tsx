
import { routes, routesArray } from '@/models/routes'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'

export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTitle></SheetTitle>
            <SheetTrigger>
                <MenuIcon className='text-green-400 text-3xl' />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-4 p-16 border-none items-center'>
                <Link href={routes.about} className='mt-32'>
                    <h1 className='text-4xl font-semibold'>
                        MO
                    </h1>
                </Link>

                <nav className='flex flex-col mt-16 gap-8'>
                    {routesArray.map(item => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className='text-xl capitalize hover:text-green-400'
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
