import styles from "../../styles/projects/Projects.module.css";
import ButtonB from "../elements/ButtonB";
import Card from "../elements/Card";
import lpdnc from "../../assets/img/projects/lpdnc.svg";
import portreact from "../../assets/img/projects/portreact.svg";
function Projects() {
    return(
        <section className={styles.projects} id="Projects">
            <h1>Projetos</h1>

            <Card
            img= {lpdnc}
            title="Landing Page - DNC"
            tech="HTML, CSS e JavaScript"
            description="Desenvolvimento de uma Landing Page para o lançamento de formação em tecnologia"
            repo="https://github.com/manoelarcanjo/LandingPage-DNC?tab=readme-ov-file"
            site="https://l-pagednc.netlify.app/"            
            />

            <Card
            img= {portreact}
            title="Portfólio em REACT"
            tech="React"
            description="Desenvolvimento de um portfólio utilizando o react"
            repo="https://github.com/manoelarcanjo/portfolioreact"
            site="https://portfolioreact-umber.vercel.app/"            
            />

            <ButtonB id="button" text="Acesse meu repositório" link="https://code-by-arcanjo.vercel.app/"/>
            
        </section>

    )
}

export default Projects