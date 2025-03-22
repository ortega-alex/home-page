import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const routes = {
    about: '#about',
    experience: '#experience',
    projects: '#projects',
    contact: '#contact',
}

export const routesArray = [
    { path: routes.about, label: 'Acerca de mi' },
    { path: routes.experience, label: 'Experiencia' },
    { path: routes.projects, label: 'Proyectos' },
    { path: routes.contact, label: 'Concactame' },
]

export const socials = [
    {
        name: 'Github',
        icon: <FaGithub />,
        link: 'https://github.com/ortega-alex'
    },
    {
        name: 'Linkedin',
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/alex-ortega-4921a5231/'
    }
]