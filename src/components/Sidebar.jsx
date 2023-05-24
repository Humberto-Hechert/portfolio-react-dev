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
        <a href="https://drive.google.com/file/d/1eiyaS_lxK5dDDjbFpFdloJpJd_7RMtoa/view?usp=drive_link" className="btn" target='_blank' rel="noreferrer">Download Currículo</a>
    </aside>
    )
}
export default Sidebar