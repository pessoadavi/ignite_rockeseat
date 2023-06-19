import styles from './Sidebar.module.css'
import Image from '../assets/Rectangle 4240.svg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export const Sidebar = (props) => {
    return (
        <>
            <aside className={styles.sidebar}>
                <img
                    src={Image}
                    className={styles.cover}
                />
                <div className={styles.profile}>
                    <Avatar hasBorder={true} src={"https://github.com/pessoadavi.png"}/>
                    <strong>Davi Pessoa</strong>
                    <span>Web Developer</span>
                </div>
                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>
    )
}

