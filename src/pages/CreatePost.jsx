import { addDoc, collection, doc } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { Navigate, useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const navigate = useNavigate();
  const postRef = collection(db, "posts");

  async function handleCreatePost(event) {
    event.preventDefault();
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    };
    await addDoc(postRef, document);
    navigate("/");
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form onSubmit={handleCreatePost} className="createPost">
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          className="description"
          type="text"
          name="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};
