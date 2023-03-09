import { Header } from "./components/Header";
import { Post } from "./Post";

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
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sapiente voluptatum similique tempore voluptas veritatis ea a at iure non quasi minus maxime impedit, quia rerum nobis praesentium, ipsum reprehenderit!"
          />
          <Post
            author="Larrisa Ionafa"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sapiente voluptatum similique tempore voluptas veritatis ea a at iure non quasi minus maxime impedit, quia rerum nobis praesentium, ipsum reprehenderit!"
          />
        </main>
      </div>
    </div>
  );
}
