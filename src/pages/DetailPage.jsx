import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const { savedPosts, setSavedPosts } = useOutletContext();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.log("Xatolik:", err);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-10">Yuklanmoqda...</div>;
  }

  if (!post) {
    return <div className="text-center mt-10">Ma’lumot topilmadi</div>;
  }

  const alreadySaved = savedPosts.some((item) => item.id === post.id);

  const handleSave = () => {
    if (alreadySaved) {
      setSavedPosts(savedPosts.filter((item) => item.id !== post.id));
    } else {
      setSavedPosts([...savedPosts, post]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-6">
      <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>

      <p className="text-gray-700 leading-relaxed mb-6">{post.body}</p>

      <button
        onClick={handleSave}
        className="px-4 py-2 rounded bg-gray-900 text-white active:scale-95 transition"
      >
        {alreadySaved ? "Saqlangan" : "Saqlanmagan"}
      </button>
    </div>
  );
};

export default DetailPage;
