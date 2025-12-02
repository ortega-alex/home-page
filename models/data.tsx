import { Technology } from '@/components/Technology'
import { DiMsqlServer, DiNodejs } from 'react-icons/di'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhp, FaReact } from 'react-icons/fa'
import { LiaDocker } from 'react-icons/lia'
import { RiNextjsLine } from 'react-icons/ri'
import { SiAntdesign, SiExpress, SiFirebase, SiGooglemaps, SiLaravel, SiMongodb, SiMysql, SiNestjs, SiPrisma, SiPython, SiShadcnui, SiTailwindcss, SiTypeorm } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export const routes = {
    about: '#about',
    experience: '#experience',
    projects: '#projects',
    technologys: '#technologys',
    project: '/projects/',
}

export const routesArray = [
    { path: routes.about, label: 'Acerca de mí' },
    { path: routes.projects, label: 'Proyectos' },
    { path: routes.experience, label: 'Experiencia' },
    { path: routes.technologys, label: 'Tecnologías' },
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
        slug: 'buscador-oca',
        title: 'Buscador OCA',
        shor_description: 'Una solución completa de búsqueda y localización de personas construida con Python ETL, NestJS y React, diseñada para centralizar información y realizar consultas compuestas en tiempo récord sobre volúmenes masivos de datos.',
        description: `Este sistema está diseñado para resolver el desafío de la información fragmentada, ofreciendo una fuente única de verdad centralizada sobre carteras de personas. Su propósito principal es optimizar la localización y consulta de individuos a través de búsquedas rápidas, específicas y compuestas, incluso sobre volúmenes masivos de datos que superan los 10 millones de registros.

La arquitectura garantiza tiempos de respuesta excepcionales, desde 0.1 segundos en consultas comunes, hasta un máximo de 4 segundos para las búsquedas más complejas y pesadas.

Componentes Principales del Sistema:
1. Motor ETL (Python)
Función: Es el núcleo de la centralización. Migra y consolida información desde múltiples fuentes de datos relacionales (como SQL Server, PostgreSQL, MySQL) hacia una base de datos NoSQL central (MongoDB).
Cómo Funciona: Utiliza archivos JSON configurables para definir orígenes, destinos y reglas de transformación, ejecutando scripts SQL personalizados mediante procesos multi-hilo en Python.
Rendimiento: Procesa aproximadamente 1 millón de registros cada 10 minutos, asegurando que la data central esté siempre actualizada de manera eficiente.

2. API de Búsqueda Optimizada (NestJS)
Función: Expone un conjunto robusto de endpoints REST para realizar consultas de alta velocidad sobre la base centralizada en MongoDB.
Capacidades de Búsqueda:
Filtros individuales de alto impacto: DPI, nombre completo.
Búsquedas compuestas y flexibles que combinan múltiples criterios como primer nombre, apellidos, dirección, municipio, etc.
Consultas a medida diseñadas para casos de uso específicos de localización.
Ventaja: Proporciona la capa de lógica de negocio que transforma peticiones complejas en consultas optimizadas, cumpliendo con los estrictos estándares de velocidad (<4s).

3. Interfaz de Usuario Web (React.js)
Función: Ofrece una interfaz moderna, intuitiva y reactiva para que los usuarios finales interactúen con el sistema.
Cómo Funciona: Se conecta y consume todas las funcionalidades de la API de NestJS, permitiendo a los equipos realizar búsquedas específicas, aplicar múltiples filtros y visualizar los resultados de forma clara y organizada para facilitar la localización de personas.  
        
Beneficios Clave:
Unificación de Datos: Elimina silos de información.
Localización Rápida: Reduce el tiempo de búsqueda de personas de horas a segundos.
Escalabilidad: Maneja volúmenes de datos masivos (>10M+ registros) sin degradación.
Flexibilidad en Consultas: Soporta desde búsquedas simples por DPI hasta consultas complejas multi-criterio.
Arquitectura Moderna: Separación clara de responsabilidades (Backend, API, Frontend), facilitando el mantenimiento y la escalabilidad.`,
        image: '/buscador-oca.jpg',
        link: 'https://github.com/ortega-alex/pruebas-binario-oca-sac',
        icon: <FaGithub />,
        skills: [
            { name: 'Python', icon: <SiPython /> },
            { name: 'NestJS', icon: <SiNestjs /> },
            { name: 'ReactJS', icon: <FaReact /> },
            { name: 'Tailwin', icon: <SiTailwindcss /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'SqlServer', icon: <DiMsqlServer /> },
            { name: 'Docker', icon: <LiaDocker /> },
        ]
    },
    {
        slug: 'geeko',
        title: 'Geeko',
        shor_description: 'Geeko es una plataforma de comercio electrónico construida con Next.js y MongoDB, diseñada para ser escalable y flexible.',
        description: `Geeko es una plataforma de comercio electrónico de nueva generación diseñada desde sus cimientos para ofrecer escalabilidad, flexibilidad y una experiencia de desarrollo moderna.

Arquitectura Tecnológica
Frontend Principal: Construido con Next.js, aprovechando sus capacidades de renderizado híbrido (SSR/SSG) para óptimo SEO y rendimiento.

Base de Datos: MongoDB como solución NoSQL, ideal para la estructura flexible que requiere un e-commerce con productos, categorías y usuarios dinámicos.

API Backend: Implementada con NestJS, proporcionando una arquitectura modular y mantenible con TypeScript nativo.

Futuro Panel de Administración: Próximo desarrollo que explorará tecnologías emergentes (como SvelteKit, Solid.js o Nuxt) para enriquecer el stack tecnológico.

Objetivos del Proyecto
Experimento Técnico: Servir como banco de pruebas para explorar y comparar frameworks modernos en un contexto real.

Escalabilidad Horizontal: Diseñado para manejar crecimiento de tráfico y catálogo sin reestructuraciones mayores.

Mantenibilidad: Código modular y bien documentado que facilite la incorporación de nuevas funcionalidades.

Características Clave
Arquitectura de microservicios preparada

Sistema de búsqueda y filtrado optimizado

Carrito de compras con persistencia en sesión

Integraciones listas para pasarelas de pago

Dashboard analítico para métricas de ventas`,
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
        shor_description: 'Smart Logistic es un sistema de gestión de exportación de vehículos eficiente y seguro.',
        description: `SmartLogistic es un sistema integral de gestión de exportación de vehículos que digitaliza y optimiza todo el ciclo de exportación. Desde la cotización inicial hasta el despacho final, proporciona una plataforma centralizada para gestionar inventario, generar documentación, realizar seguimiento en tiempo real y garantizar el cumplimiento normativo internacional.

Tecnologías: MySQL · Node.js · TypeScript · React · Docker · AWS

2. Versión Técnica (Para desarrolladores/equipo)
SmartLogistic es una plataforma SaaS especializada en la gestión del ciclo completo de exportación vehicular. Implementa un sistema modular que abarca inventario, cotización inteligente, gestión documental, logística y seguimiento satelital, todo integrado en un dashboard unificado con reporting en tiempo real.

Stack Tecnológico:

Backend: API REST con Node.js + TypeScript, arquitectura escalable

Frontend: Aplicación React con TypeScript, interfaz responsive

Base de Datos: MySQL con modelos optimizados para operaciones logísticas

Infraestructura: Contenedores Docker en AWS (EC2, RDS, S3)

Características: WebSockets para tracking, generación PDF de documentos, integración APIs de transporte`,
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
        slug: 'llevaloo',
        title: 'Llevaloo',
        shor_description: 'Llevaloo es una aplicación web y aplicación móvil para realizar compras en línea con servicio a domicilio.',
        description: `Llevaloo revoluciona la experiencia de compra de supermercado con entrega bajo demanda. Combinamos la comodidad del e-commerce con la velocidad del delivery express, eliminando las esperas tradicionales de entrega a domicilio.

¿Cómo funciona?

Compra en <2 minutos desde app móvil o web

Procesamiento inteligente de pedidos en tiempo real

Entrega express en franjas de 30-60 minutos

Seguimiento en vivo de tu repartidor

Stack Tecnológico:

App Móvil: React Native (iOS & Android)

Web App: React.js con PWA capabilities

Backend: Microservicios con Node.js (tiempo real) + PHP (gestión)

Base de Datos: MySQL optimizada para transacciones rápidas

Características: Geolocalización, notificaciones push, pagos online, gestión de inventario en vivo`,
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
        title: 'Analista programador',
        company: 'Consolidados Ochocientos (C807)',
        startDate: '2017',
        endDate: '2018',
        link: 'https://c807.com/gt/en/',
    },

    {
        num: '02',
        title: 'Desarrollador de apps ',
        company: 'AdvanCel (Start-up)',
        startDate: '2018',
        endDate: '2019',
        link: '',
    },
    {
        num: '03',
        title: 'Desarrollador Full Stack',
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
        name: 'Python',
        icon: <SiPython />,
    },
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
    },
    { name: 'Node.js', icon: <DiNodejs /> },
    { name: "php", icon: <FaPhp /> },
]