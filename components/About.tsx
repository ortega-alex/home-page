"use client"

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Link from 'next/link'
import { Photo } from './Photo'
import { Social } from './Social'
import { Button } from './ui/button'

export const About = () => {
    return (
        <section className='py-16 px-16 md:px-32 md:py-12 border-b-2' id='about' >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="order-2 md:order-none">
                        <span className='text-lx'>Sotware Developer</span>
                        <h1>Hola Soy<br /><span className='text-green-400'> Marlon Ortega</span></h1>
                        <p className='max-w-[600px] mb-9'>
                            Desarrollador con más de 8 años de experiencia. Profesional con sólida experiencia en desarrollo frontend, backend y autodidacta, combinando habilidades avanzadas en la creación de interfaces dinámicas con la gestión eficiente de servicios backend. Durante los últimos años, he trabajado en proyectos desafiantes que integran tecnologías modernas y soluciones escalables para cumplir con los objetivos del negocio.
                        </p>

                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, duration: 1 }}>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                                <Link href='CV_Marlon_Ortega.pdf' download target='_blank' rel='noreferrer'>
                                    <Button variant='link' size='lg' className='uppercase flex items-center gap-2 font-bold'>
                                        <span>Descarga CV</span>
                                        <Download className='text-lx' />
                                    </Button>
                                </Link>
                                <Social
                                    containerStyle="flex gap-6"
                                    iconStyle="w-9 h-9 border border-green-400 rounded-full flex justify-center items-center text-green-400 hover:bg-green-400/90 hover:text-black hover:transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className="order-1 md:order-none mb-8 xl:mb-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 1, duration: 0.5, ease: "easeIn" }
                            }}
                        >
                            <Photo />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
