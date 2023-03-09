import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Arthur Silva"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sapiente voluptatum similique tempore voluptas veritatis ea a at iure non quasi minus maxime impedit, quia rerum nobis praesentium, ipsum reprehenderit!"
      />
      <Post
        author="Larrisa Ionafa"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sapiente voluptatum similique tempore voluptas veritatis ea a at iure non quasi minus maxime impedit, quia rerum nobis praesentium, ipsum reprehenderit!"
      />
    </div>
  );
}
