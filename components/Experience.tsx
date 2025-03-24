import { expreriences } from '@/models/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

export const Experience = () => {
    return (
        <section className='py-16 px-16 md:px-32 md:py-12 border-b-2' id='experience'>
            <div className="container mx-auto flex flex-col items-center gap-16">
                <h1 className='text-3xl'>Experiencia</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[60px]">
                    {expreriences.map(item => (
                        <div key={item.title} className="flex flex-1 flex-col justify-center gap-1 group text-left">
                            <div className="flex justify-between text-5xl font-extrabold text-outline text-transparent transition-all duration-500 mr-[32px]">
                                {item.num}
                                <Button disabled={item.link === ''} variant='link' size='icon'>
                                    <Link
                                        href={item.link}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='w-9 h-9 border border-green-400 rounded-full flex justify-center items-center text-green-400 hover:bg-green-400/90 hover:text-black hover:transition-all duration-500'
                                    >
                                        <ArrowRight />
                                    </Link>
                                </Button>
                            </div>
                            <h2 className='text-[24px] capitalize'>{item.title}</h2>
                            <p className='text-sm text-gray-500'>{item.startDate} - {item.endDate}</p>
                            <h3 className='text-xl font-normal capitalize'>{item.company}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
