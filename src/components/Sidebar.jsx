import Avatar from '../img/humberto.jpg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="Humberto Hechert" />
        <p className="title">Backend Developer</p>
        <p>redes sociais</p>
        <p>informações de contato</p>
        <a href="" className="btn">Download Currículo</a>
    </aside>
    )
}
export default Sidebar