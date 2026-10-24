import styles from './UserMenu.module.css';
import { Avatar } from '../Avatar/Avatar';
import { ArrowDownIcon } from './icons/ArrowDownIcon';
import { UserDropdown } from './UserDropdown';
import { useState } from 'react';

export function UserMenu() {
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

    return (
        <div className={styles.userMenuContainer}>
            <button className={styles.userMenuButton} onClick={()=>setUserDropdownOpen(!isUserDropdownOpen)}>
                <Avatar />
                <ArrowDownIcon />
            </button>
            {isUserDropdownOpen&&<UserDropdown />}
        </div>
    )
}