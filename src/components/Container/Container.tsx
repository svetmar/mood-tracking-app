import styles from './Container.module.css';

export type ContainerProps = {
    children: React.ReactNode
}

export function Container({children}: ContainerProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}