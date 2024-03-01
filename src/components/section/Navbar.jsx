import styles from './../../styles/navbar/Navbar.module.css';
import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projetcs'>Projetos</Nav.Link></li>
            </ul>

            <ul>
                <li><a href="https://www.instagram.com/codebyarcanjo/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/manoelarcanjo/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30}/></a></li>
                <li><a href="https://github.com/manoelarcanjo" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a></li>
            </ul>
        </nav>
    )
}

export default Navbar;