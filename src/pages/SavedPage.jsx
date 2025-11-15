import React from "react";
import { useOutletContext } from "react-router-dom";

const SavedPage = () => {
  const { savedPosts } = useOutletContext();

  if (!savedPosts.length)
    return <div className="p-6 text-center">Savat bosh</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {savedPosts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4 shadow">
          <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
          <p className="text-gray-600 text-sm">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default SavedPage;
