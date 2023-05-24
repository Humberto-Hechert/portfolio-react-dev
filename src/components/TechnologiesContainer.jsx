import {
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiMongodb,
    DiDocker,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Experiência profissional de 1 ano com a linguagem e também com TypeScript" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall/>, text: "Experiência profissional de 1 ano, utilizando os principais frameworks e pacotes (express, nest, sequelize, Next.js " },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "Experiência profissional de 3 anos com banco de dados relacionais "},
    { id: "react", name: "React", icon: <DiReact />, text: "Experiência de 1 ano com o framework, utilizando-o em projetos pessoais" },
    { id: "mongodb", name: "Mongodb", icon: <DiMongodb />, text: "Experiência profissional de 1 ano com banco de dados não relacional" },
    { id: "docker", name: "Docker", icon: <DiDocker />, text: "Experiência de 1 ano com docker e conteinirização"},
]

const TechnologiesContainer = () => {
    return (
        <section className='technologies-container'>
            <h2>Principais Tecnologias</h2>
            <div className='technologies-grid'>
                {technologies.map((tech) => (
                    <div className='technology-card' id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className='technology-info'>
                            <h3>{tech.name}</h3>
                            <p>{tech.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesContainer