import { PostCard } from "../components";

export const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum optio velit molestiae eveniet pariatur accusamus architecto quidem. Cum ipsam unde pariatur dicta hic? Unde saepe iure quas nihil quisquam numquam, sequi facilis nostrum labore consequatur obcaecati fuga similique, provident, culpa dolorem. Maxime, alias perspiciatis.",
      author: "Erik",
    },
    {
      id: 2,
      title: "lorem ipsum dolor asodiitit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum optio velit molestiae eveniet pariatur accusamus architecto quidem. Cum ipsam unde pariatur dicta hic? Unde saepe iure quas nihil quisquam numquam, sequi facilis nostrum labore consequatur obcaecati fuga similique, provident, culpa dolorem. Maxime, alias perspiciatis.",
      author: "Erik",
    },
  ];

  return (
    <section>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
};
