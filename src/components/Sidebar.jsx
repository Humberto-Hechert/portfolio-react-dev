import Avatar from '../img/humberto.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import '../styles/components/sidebar.sass'



const Sidebar = () => {
    return (
    <aside id="sidebar">
        <img src={Avatar} alt="Humberto Hechert" />
        <p className="title">Backend Developer</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Download Currículo</a>
    </aside>
    )
}
export default Sidebar