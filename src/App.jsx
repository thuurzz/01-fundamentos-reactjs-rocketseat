import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Arthur Silva"
            position={"Arq. Tecnologia Jr"}
            linkAvatar={"http://github.com/thuurzz.png"}
          />
          <Post
            author="Larrisa Ionafa"
            position={"Eng. de Software"}
            linkAvatar={"http://github.com/y0naha.png"}
          />
          <Post
            author="Lucas Silva"
            position={"Arq. de Componentes"}
            linkAvatar={"http://github.com/lucas-silvs.png"}
          />
        </main>
      </div>
    </div>
  );
}
