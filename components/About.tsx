import { Download } from 'lucide-react'
import { Social } from './Social'
import { Button } from './ui/button'
import { Photo } from './Photo'

export const About = () => {
    return (
        <section className='py-16 px-16 md:px-32 md:py-12 border-b-2' id='about' >
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="order-2 md:order-none">
                        <span className='text-lx'>Sotware Developer</span>
                        <h1>Hola Soy<br /><span className='text-green-400'> Marlon Ortega</span></h1>
                        <p className='max-w-[600px] mb-9'>
                            Desarrollador con más de 8 años de experiencia. Profesional con
                            sólida experiencia en desarrollo frontend y backend, combinando
                            habilidades avanzadas en la creación de interfaces dinámicas con
                            la gestión eficiente de servicios backend. Durante los últimos
                            años, he trabajado en proyectos desafiantes que integran
                            tecnologías modernas y soluciones escalables para cumplir con
                            los objetivos del negocio
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                            <Button variant='link' size='lg' className='uppercase flex items-center gap-2 font-bold'>
                                <span>Descarga CV</span>
                                <Download className='text-lx' />
                            </Button>
                            <Social
                                containerStyle="flex gap-6"
                                iconStyle="w-9 h-9 border border-green-400 rounded-full flex justify-center items-center text-green-400 hover:bg-green-400/90 hover:text-black hover:transition-all duration-500"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
        </section>
    )
}
