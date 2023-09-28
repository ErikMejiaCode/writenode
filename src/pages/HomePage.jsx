import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard, SkeletonCard } from "../components";

export const HomePage = () => {
  const [posts, setPosts] = useState(new Array(3).fill(false));
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
      {posts.map((post, index) =>
        post ? (
          <PostCard
            post={post}
            key={post.id}
            toggle={toggle}
            setToggle={setToggle}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};
