import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, position, linkAvatar }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={linkAvatar} />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>{position}</span>
          </div>
        </div>
        <time>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa! </p>
        <p>👋 Acabei de subir mais um projeto no meu portifa.</p>
        <p>É um projeto que fiz no Ignite, evento da Rocketseat.</p>
        <p>O nome doprojeto é Ignite Fedd 🚀</p>
        <p>
          <a href="">jane.design/doctorcare #novoprojeto #nlw #rocketseat</a>
        </p>
        <p>
          <a href=""> #novoprojeto</a>
          <a href=""> #nlw </a>
          <a href=""> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu cometário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
