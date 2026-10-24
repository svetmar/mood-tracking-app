import styles from './Header.module.css';
import { Logo } from '../../components/Logo/Logo';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import { Greeting } from '../../components/Greeting/Greeting';
import { Button } from '../../components/Button/Button';

type HeaderProps = {
    isMoodLogged: boolean;
    onMoodLog?: () => void;
};

export function Header({isMoodLogged, onMoodLog}: HeaderProps) {
    return (
        <div>
            <div className={styles.navBarContainer}>
                <Logo />
                <UserMenu />
            </div>
            <Greeting />
            {!isMoodLogged && (
                <div className={styles.buttonContainer}>
                    <Button onClick={onMoodLog}>Log today's mood</Button>
                </div>
                )}
        </div>
    )
}