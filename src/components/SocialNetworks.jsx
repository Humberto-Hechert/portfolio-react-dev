import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/humbertohechert/"},
    { name: 'github', icon: <FaGithub />, href: "https://github.com/Humberto-Hechert"},
]

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.href} className='social-btn' id={network.name} key={network.name} target='_blank' rel="noreferrer">
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks