import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import { v4 as uuidv4 } from "uuid";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: uuidv4(),
    author: {
      name: "Luan Andrade",
      position: "Arq. Componentes e API Mentor",
      linkAvatar: "http://github.com/Luan10017.png",
    },
    publishedAt: new Date(),
    content: [
      {
        type: "paragraph",
        text: "Fala galeraa!👋",
      },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome doprojeto é Ignite feed 🚀",
      },
      {
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },
  {
    id: uuidv4(),
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
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome doprojeto é Ignite feed 🚀",
      },
      {
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },
  {
    id: uuidv4(),
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
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome doprojeto é Ignite feed 🚀",
      },
      {
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },
  {
    id: uuidv4(),
    author: {
      name: "Beatriz Melo",
      position: "Arq. de Tec",
      linkAvatar: "http://github.com/trizimelo.png",
    },
    publishedAt: new Date(),
    content: [
      {
        type: "paragraph",
        text: "Fala galeraa!👋",
      },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome doprojeto é Ignite feed 🚀",
      },
      {
        type: "link",
        text: "jane.design/doctorcare",
      },
    ],
  },
  {
    id: uuidv4(),
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
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, evento da Rocketseat. O nome doprojeto é Ignite feed 🚀",
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
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
