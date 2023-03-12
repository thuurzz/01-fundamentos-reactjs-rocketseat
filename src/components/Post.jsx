import styles from "./Post.module.css";

export function Post({ author }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="http://github.com/thuurzz.png" />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Arq. Tecnologia Jr.</span>
          </div>
        </div>
        <time>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa.</p>
        <p>
          É um projeto que fiz no NLW Return, evento da Rocketseat. O nome
          doprojeto é DoctorCare 🚀{" "}
        </p>
        <p>
          <a href="">jane.design/doctorcare #novoprojeto #nlw #rocketseat</a>
        </p>
        <p>
          <a href=""> #novoprojeto</a>
          <a href=""> #nlw </a>
          <a href=""> #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
