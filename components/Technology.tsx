import { technologies } from "@/models/data"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"

export const Technology = () => {
    return (
        <section className='py-16 px-16 md:px-32 md:py-12' id='technologys'>
            <div className="container mx-auto flex flex-col items-center gap-16">
                <h1 className='text-3xl capitalize'>Tecnologias utilisadas recientemente</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                    {technologies.map(item => (
                        <Card key={item.name} className='border-none bg-transparent hover:text-green-400 transition-all duration-500 p-4'>
                            <CardContent className='flex justify-center items-center text-5xl'>
                                {item.icon}
                            </CardContent>
                            <CardFooter className="flex justify-center items-center">
                                <CardTitle className='text-xl font-bold uppercase'>{item.name}</CardTitle>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
