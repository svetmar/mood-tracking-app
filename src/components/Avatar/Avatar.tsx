import styles from './Avatar.module.css'

export type DefaultAvatarProps = {
  size: 40 | 64;
};

export function DefaultAvatar({size} : DefaultAvatarProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="Default avatar" role="img" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2185_473)">
            <ellipse cx="32.0004" cy="62.4" rx="25.6" ry="19.2" fill="white"/>
            <circle opacity="0.9" cx="32.0002" cy="25.6" r="12.8" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_2185_473">
            <rect width="64" height="64" rx="32" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export type AvatarProps = {
    src?: string;
    alt?: string;
    size?: 40 | 64;
}

export function Avatar(props: AvatarProps) {
    const {src, alt, size=40} = props;

    return (
        <div className={styles.avatarContainer} style={{width:size, height:size}}>
            {src ? <img className={styles.avatarImage} src={src} alt={alt} /> : <DefaultAvatar size={size}/>}
        </div>
    )
}