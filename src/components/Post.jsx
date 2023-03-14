import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.linkAvatar} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.position}</span>
          </div>
        </div>
        <time title={dateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((linha, index) =>
          linha.type === "paragraph" ? (
            <p key={index}>{linha.text}</p>
          ) : (
            <p key={index}>
              <a href="#">{linha.text}</a>
            </p>
          )
        )}
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
