import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard } from "../components";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const postReference = collection(db, "posts");

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postReference);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    console.log("------");
    getPosts();
  }, []);

  return (
    <section>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </section>
  );
};
