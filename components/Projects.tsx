import { proyects, routes } from '@/models/data'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineAim } from 'react-icons/ai'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card'

export const Projects = () => {
    return (
        <section className='py-16 px-16 md:px-32 md:py-12 border-b-2' id='projects'>
            <div className="container mx-auto">
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
                                <CardTitle>{item.title}</CardTitle>
                                <CardDescription className='h-[80px]'>{item.shor_description}</CardDescription>
                                <div className='flex flex-row gap-4'>
                                    <Link href={item.link} target='_blank' rel='noreferrer'>
                                        <Button variant='outline' size='icon'>
                                            {item.icon}
                                        </Button>
                                    </Link>
                                    <Link href={routes.project + item.slug}>
                                        <Button variant='outline' size='icon'>
                                            <AiOutlineAim />
                                        </Button>
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className='flex justify-center mt-16'>
                    <Link href={routes.project + proyects[0].slug} className='text-xl capitalize hover:text-green-400'>
                        <Button size='lg'>
                            Ver todos
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
