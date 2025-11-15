import React from "react";
import { useOutletContext } from "react-router-dom";

const SavedPage = () => {
  const { savedPosts } = useOutletContext();

  if (!savedPosts.length) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-16 text-center">
        <p className="text-gray-600 text-lg">
          Hozircha saqlangan yangiliklar yo‘q
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">
        Saqlangan yangiliklar
      </h1>
      <div className="space-y-6">
        {savedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {post.body.length > 200
                ? post.body.slice(0, 200) + "..."
                : post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPage;
