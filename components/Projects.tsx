import { proyects, routes } from '@/models/data'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineAim } from 'react-icons/ai'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card'

export const Projects = () => {
    return (
        <section className='py-16 px-16 md:px-32 md:py-12 border-b-2' id='projects'>
            <div className="container mx-auto flex flex-col items-center">
                <h1 className='text-3xl'>Proyectos destacados</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mt-16'>
                    {proyects.slice(0, 3).map(item => (
                        <Card key={item.title} className='border-none bg-transparent'>
                            <CardContent>
                                <Link href={routes.project + item.slug}>
                                    <Image src={item.image} width={200} height={200} alt={item.title} className='w-full h-[300px] rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500' />
                                </Link>
                            </CardContent>
                            <CardFooter className='flex flex-col gap-2'>
                                <CardTitle className='text-xl font-bold uppercase'>{item.title}</CardTitle>
                                <CardDescription className='h-[80px]'>{item.shor_description}</CardDescription>
                                <div className='flex flex-row gap-4'>
                                    <Button variant='outline' size='icon' disabled={item.link === ''}>
                                        <Link href={item.link} target='_blank' rel='noreferrer'>
                                            {item.icon}
                                        </Link>
                                    </Button>
                                    <Button variant='outline' size='icon'>
                                        <Link href={routes.project + item.slug}>
                                            <AiOutlineAim />
                                        </Link>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className='flex justify-center mt-16'>
                    <Button size='lg' className='capitalize font-bold'>
                        <Link href={routes.project + proyects[0].slug} >
                            Ver todos
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
