import styles from './Avatar.module.css'

export const Avatar = (props) => {
    return (
        <>
            <img
                src={props.src} alt="Logotipo avatar"
                className={props.hasBorder ? styles.avatarWithBorder : styles.avatarWithOutBorder}
            />
        </>
    )
}