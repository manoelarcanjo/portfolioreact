import PropTypes from 'prop-types';
import styles from "../../styles/card/Card.module.css";
import ButtonB from "./ButtonB";

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="Erro" />
            </a>

            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text="Acesse o repositório" link={repo}/>
            </section>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Card