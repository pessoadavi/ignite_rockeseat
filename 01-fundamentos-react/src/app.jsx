import './global.css'
import styles from './app.module.css'

import { Post } from './components/Post'
import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avartarUrl: 'https://github.com/pessoadavi.png',
        name: "Davi Pessoa",
        role: "Analista de sistemas"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'davi.design/crud ' }
      ],
      publishedAt: new Date('2023-04-30 00:12:00')
    },
    {
      id: 2,
      author: {
        avartarUrl: 'https://avatars.githubusercontent.com/u/29809911?v=4',
        name: "Ronier Lima",
        role: "Tech Leader"
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'ronier.design/calc ' }
      ],
      publishedAt: new Date('2023-05-01 10:34:00')
    }
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}
