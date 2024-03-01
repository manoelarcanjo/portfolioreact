import styles from './../../styles/Navbar.module.css';
import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>Apresentação</li>
                <li>Habilidades</li>
                <li>Projetos</li>
            </ul>

            <ul>
                <li><FaInstagram size={30}/></li>
                <li><FaLinkedinIn size={30}/></li>
                <li><FaGithub size={30}/></li>
            </ul>
        </nav>
    )
}

export default Navbar;