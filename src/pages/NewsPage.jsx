import React, { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { savedPosts, setSavedPosts } = useOutletContext();

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(() => {
        setPosts(mockPosts);
        setLoading(false);
      });
  }, []);

  const toggleSave = (post) => {
    const isSaved = savedPosts.some((p) => p.id === post.id);
    if (isSaved) {
      setSavedPosts(savedPosts.filter((p) => p.id !== post.id));
    } else {
      setSavedPosts([...savedPosts, post]);
    }
  };

  if (loading)
    return (
      <div className="text-center mt-20 text-xl font-semibold text-gray-600 animate-pulse">
        Yuklanmoqda...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const isSaved = savedPosts.some((p) => p.id === post.id);

        return (
          <div
            key={post.id}
            className="bg-white border rounded-2xl shadow hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
          >
           <div>
           <img
              className="w-full rounded-xl h-[300px]"
              src="https://picsum.photos/200/"
              alt=""
            />
           </div>
            <h1 className="font-semibold text-xl mb-3 text-gray-900 line-clamp-2">
              {post.title}
            </h1>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
              {post.body}
            </p>

            <div className="mt-auto flex justify-between items-center pt-2">
              <Link
                to={`/detail/${post.id}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Batafsil o‘qish
              </Link>

              <button
                onClick={() => toggleSave(post)}
                className={`px-3 py-1 text-sm rounded-full border transition ${
                  isSaved
                    ? "bg-red-100 text-red-600 border-red-300 hover:bg-red-200"
                    : "bg-green-100 text-green-700 border-green-300 hover:bg-green-200"
                }`}
              >
                {isSaved ? "O‘chirish" : "Saqlash"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsPage;
