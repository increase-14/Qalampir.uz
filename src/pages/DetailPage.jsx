import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const { savedPosts, setSavedPosts } = useOutletContext();

  const posts = [
    {
      id: 1,
      title: "O‘zbekiston iqtisodiyoti 2025 yilda 7% o‘sishi kutilmoqda",
      body: "Jahon banki hisobotiga ko‘ra, eksport va investitsiyalar o‘sishi mamlakat iqtisodiyotini yangi bosqichga olib chiqadi. Energetika va IT sohasidagi loyihalar asosiy omil bo‘lmoqda. Bu yilgi o‘sish 2024 yilga nisbatan 1.5 baravar yuqori.",
    },
    {
      id: 2,
      title: "Toshkentda yangi IT Park ochildi",
      body: "1000 dan ortiq dasturchi va startapchilar uchun mo‘ljallangan zamonaviy markaz bugun rasman ish boshladi. Prezident ishtirok etdi. Binoda coworking, inkubatsiya va akseleratsiya dasturlari mavjud.",
    },
  ];

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-10 text-center">
        <p className="text-red-600 font-medium">Ma’lumot topilmadi</p>
      </div>
    );
  }

  const saqlangan = savedPosts.some((p) => p.id === post.id);

  const saqlash = () => {
    if (saqlangan) {
      setSavedPosts(savedPosts.filter((p) => p.id !== post.id));
    } else {
      setSavedPosts([...savedPosts, post]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed text-lg mb-8">{post.body}</p>
      <button
        onClick={saqlash}
        className={`px-6 py-3 rounded-lg font-medium transition-all ${
          saqlangan
            ? "bg-red-600 text-white hover:bg-red-700"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        {saqlangan ? "Saqlangan" : "Saqlash"}
      </button>
    </div>
  );
};

export default DetailPage;
