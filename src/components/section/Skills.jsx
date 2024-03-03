import styles from "../../styles/skills/Skills.module.css";
import javascript from "./../../assets/img/skills/javascript.svg";
import html from "./../../assets/img/skills/html.svg";
import css from "./../../assets/img/skills/css.svg";
import react from "./../../assets/img/skills/react.svg";
import typecript from "./../../assets/img/skills/typescript.svg";

function Skills() {
    return(
        <section className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>

            <div>
                <img src={javascript} alt="Logo JavaScript" />
                <img src={html} alt="Logo HTML" />
                <img src={css} alt="Logo CSS" />
                <img src={react} alt="Logo ReactJS" />
                <img src={typecript} alt="Logo TypeScript"/>
            </div>
        </section>
    )
}

export default Skills