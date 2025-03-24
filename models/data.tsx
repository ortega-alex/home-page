import { Technology } from '@/components/Technology'
import { DiNodejs } from 'react-icons/di'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhp, FaReact } from 'react-icons/fa'
import { LiaDocker } from 'react-icons/lia'
import { RiNextjsLine } from 'react-icons/ri'
import { SiAntdesign, SiExpress, SiFirebase, SiGooglemaps, SiLaravel, SiMongodb, SiMysql, SiNestjs, SiPrisma, SiShadcnui, SiTailwindcss, SiTypeorm } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export const routes = {
    about: '#about',
    experience: '#experience',
    projects: '#projects',
    technologys: '#technologys',
    project: '/projects/',
}

export const routesArray = [
    { path: routes.about, label: 'Acerca de mi' },
    { path: routes.projects, label: 'Proyectos' },
    { path: routes.experience, label: 'Experiencia' },
    { path: routes.technologys, label: 'Tecnologias' },
]

export type Social = {
    name: string
    icon: React.ReactNode
    link: string
}

export const socials: Social[] = [
    {
        name: 'Github',
        icon: <FaGithub />,
        link: 'https://github.com/ortega-alex'
    },
    {
        name: 'Linkedin',
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/alex-ortega-4921a5231/'
    },
    {
        name: 'Email',
        icon: <FaEnvelope />,
        link: 'mailto:mortegalex27@outlook.es'
    }
]

export type Skill = {
    name: string
    icon: React.ReactNode
}

export type Proyect = {
    slug: string
    title: string
    shor_description: string
    description: string
    image: string
    link: string
    icon: React.ReactNode,
    skills: Skill[]
}

export const proyects: Proyect[] = [
    {
        slug: 'geeko',
        title: 'Geeko',
        shor_description: 'Geeko es una idea de una plataforma de comercio electrónico construida con Next.js y MongoDB, diseñada para ser escalable y flexible.',
        description: 'Geeko es una idea de una plataforma de comercio electrónico construida con Next.js y MongoDB, diseñada para ser escalable y flexible. Este proyecto es una oportunidad de explorar diferentes tecnologías en el desarrollo web moderno, incluyendo NestJS para la API, Next.js para el frontend y próximamente un panel de administración con una nueva tecnología.',
        image: '/geeko.png',
        link: 'https://github.com/ortega-alex/geeko',
        icon: <FaGithub />,
        skills: [
            { name: 'Next.js', icon: <RiNextjsLine /> },
            { name: 'NestJS', icon: <SiNestjs /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Prisma', icon: <SiPrisma /> },
            { name: 'Shadcnui', icon: <SiShadcnui /> },
            { name: 'Docker', icon: <LiaDocker /> },
            { name: 'Tailwin', icon: <SiTailwindcss /> }
        ]
    },
    {
        slug: 'smart-logistic',
        title: 'Smart Logistic',
        shor_description: 'Smart Logistic es un sistema de gestión de exportacion de vehículos eficiente y segura.',
        description: 'SmartLogistic es un sistema de gestión de exportacion de vehículos, permitiendo a la empresa poder gestionar, cotizar, registrar y exportar los vehículos de manera eficiente y segura. Actualmente se encuentra en fase de desarrollo y planificación, pero el objetivo es poder ofrecer una solución completa para la gestión de exportación de vehículos.',
        image: '/smart-logistic.jpg',
        link: 'https://github.com/ortega-alex/smart-logistic',
        icon: <FaGithub />,
        skills: [
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Node.js', icon: <DiNodejs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'TypeOrm', icon: <SiTypeorm /> },
            { name: 'Ant Design', icon: <SiAntdesign /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'Docker', icon: <LiaDocker /> }
        ]
    },
    {
        slug: 'llevalo',
        title: 'Llevalo',
        shor_description: 'Llevalo es una aplicación web y aplicacion movil para realizar compras en linea con servicio adomicilio.',
        description: 'Llevalo es una aplicación web y aplicacion movil para realizar compras en linea con servicio adomicilio. Esta aplicación se ha desarrollado para ayudar a los clientes a realizar sus compras de manera rápida y eficiente, sin tener que esperar a que el servicio adomicilio se lleve a cabo. La aplicación se basa en una plataforma de comercio electrónico construida con React Native, React js, Php, Node.js y Mysql.',
        image: '/llevalo.jpg',
        link: 'https://github.com/ortega-alex/llevaloo',
        icon: <FaGithub />,
        skills: [
            { name: 'React Native', icon: <TbBrandReactNative /> },
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Php', icon: <FaPhp /> },
            { name: 'Node.js', icon: <DiNodejs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'Ant Design', icon: <SiAntdesign /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'Docker', icon: <LiaDocker /> },
            { name: 'Firebase', icon: <SiFirebase /> },
            { name: 'Maps', icon: <SiGooglemaps /> }
        ]
    }
]

export const expreriences = [
    {
        num: '01',
        title: 'Analista Programador',
        company: 'Consolidados Ochocientos (C807)',
        startDate: '2017',
        endDate: '2018',
        link: 'https://c807.com/gt/en/',
    },

    {
        num: '02',
        title: 'Desarrollador de Apps ',
        company: 'AdvanCel (Start-up)',
        startDate: '2018',
        endDate: '2019',
        link: '',
    },
    {
        num: '03',
        title: 'Desarrollador FullStack',
        company: 'Oca',
        startDate: '2019',
        endDate: '2025',
        link: 'https://www.ocacall.com/',
    },
]

export type Technology = {
    name: string
    icon: React.ReactNode
}

export const technologies: Technology[] = [
    {
        name: 'React.js',
        icon: <FaReact />,
    },
    {
        name: 'Next.js',
        icon: <RiNextjsLine />,
    },
    {
        name: 'NestJS',
        icon: <SiNestjs />,
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
    },
    {
        name: 'Laravel',
        icon: <SiLaravel />,
    },
    {
        name: 'Docker',
        icon: <LiaDocker />,
    }
]