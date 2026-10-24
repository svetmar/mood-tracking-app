import styles from './UserDropdown.module.css';
import { GearIcon } from './icons/GearIcon';
import { ExitIcon } from './icons/ExitIcon';

export function UserDropdown() {
    return (
        <div className={styles.dropdownContainer} role="menu" aria-label="User menu">
            <div className={styles.userInfo}>
                <p className={styles.userName}>Lisa Maria</p>
                <p className={styles.userEmail}>lisa@mail.com</p>
            </div>
            <hr className={styles.userDivider}/>
            <ul className={styles.buttons}>
                <li>
                    <button className={styles.buttonSettings}>
                        <GearIcon />
                        <span>Settings</span>
                    </button>
                </li>
                <li>
                    <button className={styles.buttonLogout}>
                        <ExitIcon />
                        <span>Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}