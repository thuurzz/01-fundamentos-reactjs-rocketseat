import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const post = [
  {
    id: crypto.randomUUID(),
    author: {
      name: "Arthur Silva",
      position: "Arq. Tecnologia Jr",
      linkAvatar: "http://github.com/thuurzz.png",
    },
    publishedAt: new Date(),
    content: [
      {
        type: "paragraph",
        text: "Fala galeraa!👋",
      },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome doprojeto é Ignite Fedd 🚀",
      },
      {
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    author: {
      name: "Lucas Silva",
      position: "Arq. de Componentes",
      linkAvatar: "http://github.com/lucas-silvs.png",
    },
    publishedAt: new Date(),
    content: [
      {
        type: "paragraph",
        text: "Fala galeraa!👋",
      },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome doprojeto é Ignite Fedd 🚀",
      },
      {
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    author: {
      name: "Larissa Ionafa",
      position: "Eg. de Software",
      linkAvatar: "http://github.com/y0naha.png",
    },
    publishedAt: new Date(),
    content: [
      {
        type: "paragraph",
        text: "Fala galeraa!👋",
      },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome doprojeto é Ignite Fedd 🚀",
      },
      {
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((p) => (
            <Post
              key={p.id}
              author={p.author}
              publishedAt={p.publishedAt}
              content={p.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
