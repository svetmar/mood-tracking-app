import styles from './Greeting.module.css';

export function Greeting() {
    return (
        <div className={styles.greetingContainer}>
            <p className={styles.greeting}>Hello, Lisa!</p>
            <h1 className={styles.title}>How are you feeling today?</h1>
            <p className={styles.date}>{new Intl.DateTimeFormat('en-US', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}).format(new Date)}</p>
        </div>
    )
}