import styles from "../../styles/footer/Footer.module.css";
import {FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer} id="Footer">
            <ul>
                <li><a href="https://www.instagram.com/codebyarcanjo/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/manoelarcanjo/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30}/></a></li>
                <li><a href="https://github.com/manoelarcanjo" target="_blank" rel="noopener noreferrer"><FaGithub size={30}/></a></li>
            </ul>

            <p>codebyarcanjo@gmail.com</p>
            <p>Manoel Arcanjo © 2024</p>
        </footer>
    )
}

export default Footer