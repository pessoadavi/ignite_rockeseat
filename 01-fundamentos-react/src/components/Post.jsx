import { useState } from 'react';

import { formatDistanceToNow } from 'date-fns'
import { format } from 'date-fns/esm'
import { ptBR } from 'date-fns/locale'
import styles from '../components/Post.module.css'

import { Avatar } from './Avatar'
import { Comments } from './Comments'

export const Post = ({ author, publishedAt, content }) => {

    const [newCommentText, setNewCommentText] = useState('')
    const [comments, setComments] = useState([
        "Post bacana."
    ])

    const handleCreateNewComment = () => {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    const handleNewCommentText = () => {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    const deleteComment = (comment) => {
        const result = comments.filter(c => c !== comment)
        setComments(result)
    }

    const handleNewCommentInvalid = () => {
        event.target.setCustomValidity("Este campo é obrigatório.")
    }

    const isNewCommentInputEmpty = newCommentText.length === 0

    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar hasBorder={true} src={author.avartarUrl} />
                        <div className={styles.avatarInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>

                    <time
                        title={format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })}
                        dateTime={publishedAt.toISOString()}>
                        {formatDistanceToNow(publishedAt, {
                            locale: ptBR,
                            addSuffix: true
                        })}
                    </time>
                </header>

                <div className={styles.content}>
                    {content.map(line => {
                        return line.type === 'paragraph' ?
                            <p key={line.content}>{line.content}</p> :
                            <p key={line.content}><a href="#">{line.content}</a></p>
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        required
                        name="comment"
                        value={newCommentText}
                        onChange={handleNewCommentText}
                        placeholder='Deixe seu comentário'
                        onInvalid={handleNewCommentInvalid}
                    />
                    <footer> 
                        <button type='submit' disabled={isNewCommentInputEmpty}>
                            Publicar
                        </button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return (
                            <Comments
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment}
                            />
                        )
                    })}
                </div>
            </article>
        </>
    )
}