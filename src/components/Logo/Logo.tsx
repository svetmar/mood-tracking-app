import styles from './Logo.module.css';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';

export function Logo() {
    return (
        <Link to="/" className={styles.logoContainer}>
            <LogoIcon />
            <span className={styles.logoHeader}>Mood tracker</span>
        </Link>
    )
}