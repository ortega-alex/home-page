'use client'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Proyect, proyects, routes } from '@/models/data'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'

function ProyectDetail() {

    const { slug } = useParams<{ slug: string }>()
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (slug) {
            if (!api) return
            const index = proyects.findIndex(item => item.slug === slug)
            if (index != -1) api.scrollTo(index)
        }
    }, [slug, api])

    return (
        <main>
            <section className='px-16 py-16 md:py-0 md:px-32  flex flex-col gap-16' >
                <Link href={`/${routes.projects}`}>
                    <Button variant='link' size='lg' className='uppercase flex items-center gap-2 font-bold'>
                        <BiArrowBack /> Volver
                    </Button>
                </Link>

                <Carousel setApi={setApi}>
                    <CarouselContent>
                        {proyects.map((item: Proyect) => (
                            <CarouselItem key={item.slug}>
                                <div className="flex flex-col md:flex-row justify-around items-start gap-4 pb-2 border-b-2">
                                    <div>
                                        <h1 className='text-green-400'>{item.title}</h1>
                                        <pre className='max-w-[600px] whitespace-pre-wrap'>{item.description}</pre>
                                        <div className='flex justify-center mt-6'>
                                            <Button variant='outline' size='icon' disabled={item.link === ''}>
                                                <Link href={item.link} target='_blank' rel='noreferrer'>
                                                    {item.icon}
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <Image src={item.image} width={400} height={400} alt={item.title} />
                                </div>

                                <div className='flex flex-col justify-center items-center mt-16'>
                                    <h2 className='text-xl font-medium mb-6'>Tecnologías</h2>
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-16 max-w-[600px]'>
                                        {item.skills.map(item => (
                                            <div key={item.name} className='flex flex-row gap-2 items-center hover:text-green-400'>
                                                {item.icon}
                                                <span>{item.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='scale-125 top-20' />
                    <CarouselNext className=' scale-125 top-20' />
                </Carousel>

            </section>
        </main>
    )
}

export default ProyectDetail