import PropTypes from 'prop-types';
import styles from './../../styles/buttonA/ButtonA.module.css';

function ButtonA({text, link}) {
    return (
        <div>
            <a href={link} target="_blank">
                <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}

ButtonA.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default ButtonA