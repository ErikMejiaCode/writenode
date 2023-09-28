import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard } from "../components";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const postReference = useRef(collection(db, "posts"));
  useTitle("Home");

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postReference.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getPosts();
  }, [postReference, toggle]);

  return (
    <section>
      {posts.map((post) => (
        <PostCard
          post={post}
          key={post.id}
          toggle={toggle}
          setToggle={setToggle}
        />
      ))}
    </section>
  );
};
