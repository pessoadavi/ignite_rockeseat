import { useState } from 'react';
import styles from './Comments.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar';

export const Comments = ({ content, onDeleteComment }) => {

    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1 
        })
    }

    return (
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src="https://github.com/pessoadavi.png" />
                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime} >
                                <strong>Davi Pessoa</strong>
                                <time title='27/04/2023' dateTime="2023-04-27 10:16:30">Cerca de 1h atrás.</time>
                            </div>
                            <button onClick={handleDeleteComment} title='Deletar comentário'>
                                <Trash size={24} />
                            </button>
                        </header>
                        <p>{content}</p>
                    </div>

                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    );
}
