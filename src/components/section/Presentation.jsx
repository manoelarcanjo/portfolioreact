import styles from './../../styles/presentation/Presentation.module.css';
import ButtonA from '../elements/ButtonA';

function Presentation() {
    return (
        <section id="Presentation" className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio </strong></h4>
            <h1>Olá, eu sou Manoel Arcanjo!</h1>
            <p>Sou graduando em Analise e Desenvolvimento de sistemas pela Uninassau, <br />
            sou estudante da Formação em Tecnologia pela Escola DNC <br />
             e estudante do Curso de Front-end pela Vai na Web <br />
            Estou sempre em busca de desafios e oportunidades de aprendizado <br />
            e crescimento na área de desenvolvimento web</p>

            <ButtonA link='https://github.com/manoelarcanjo' text='Conecte-se comigo!'/>            

        </section>
    )
}

export default Presentation