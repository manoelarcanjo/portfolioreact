import styles from './../../styles/buttonB/ButtonB.module.css';
import PropTypes from 'prop-types';

function ButtonB({text, link}) {
    return (
        <div>
            <a href={link} target='_blank'>
                <button className={styles.btnb}>{text}</button>
            </a>
        </div>
    )
}

ButtonB.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default ButtonB