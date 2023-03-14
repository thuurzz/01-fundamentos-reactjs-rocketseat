import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const dateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateANewComment() {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleNewComment() {
    setNewComment(event.target.value);
  }

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

      <form onSubmit={handleCreateANewComment} className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewComment}
          placeholder="Deixe seu cometário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, idx) => (
          <Comment key={idx} content={comment} />
        ))}
      </div>
    </article>
  );
}
