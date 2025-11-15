import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { FiHeart, FiClock } from "react-icons/fi";

const NewsPage = () => {
  const { savedPosts, setSavedPosts } = useOutletContext();

  const posts = [
    {
      id: 1,
      title: "O‘zbekiston iqtisodiyoti 2025 yilda 7% o‘sishi kutilmoqda",
      body: "Jahon banki hisobotiga ko‘ra, eksport va investitsiyalar o‘sishi mamlakat iqtisodiyotini yangi bosqichga olib chiqadi. Energetika va IT sohasidagi loyihalar asosiy omil bo‘lmoqda.",
      date: "15 noyabr, 2025",
    },
    {
      id: 2,
      title: "Toshkentda yangi IT Park ochildi",
      body: "1000 dan ortiq dasturchi va startapchilar uchun mo‘ljallangan zamonaviy markaz bugun rasman ish boshladi. Prezident ishtirok etdi.",
      date: "14 noyabr, 2025",
    },
    {
      id: 3,
      title: "Yangi metro liniyasi qurilishi boshlandi",
      body: "Sergeli va Yangihayot tumanlarini bog‘lovchi yangi metro liniyasi 2027 yilda foydalanishga topshiriladi. Umumiy uzunligi — 12 km.",
      date: "13 noyabr, 2025",
    },
    {
      id: 4,
      title: "O‘zbekistonlik talaba xalqaro olimpiadada oltin oldi",
      body: "Matematika bo‘yicha xalqaro olimpiadada 1-o‘rinni qo‘lga kiritgan Abduqodir Toshkentga qaytdi. Uni aeroportda kutib olishdi.",
      date: "12 noyabr, 2025",
    },
    {
      id: 5,
      title: "Yangi soliq imtiyozlari — tadbirkorlarga yordam",
      body: "Kichik biznes uchun soliq stavkasi 2 baravar kamaytirildi. Bu 2026 yilgacha amal qiladi.",
      date: "11 noyabr, 2025",
    },
    {
      id: 6,
      title: "Ob-havo: hafta oxirida yomg‘ir kutilmoqda",
      body: "Sinoptiklar ma’lumotiga ko‘ra, 16-17 noyabr kunlari butun respublika bo‘ylab yomg‘ir yog‘adi. Harorat 12-15 daraja atrofida bo‘ladi.",
      date: "15 noyabr, 2025",
    },
  ];

  const saqlash = (post) => {
    const bor = savedPosts.some((p) => p.id === post.id);
    if (bor) {
      setSavedPosts(savedPosts.filter((p) => p.id !== post.id));
    } else {
      setSavedPosts([...savedPosts, post]);
    }
  };

  const asosiy = posts[0];
  const qolgan = posts.slice(1);

  return (
    <div className="min-h-screen">
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-red-600 font-semibold text-sm">ASOSIY</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
                <Link
                  to={`/detail/${asosiy.id}`}
                  className="hover:text-red-600 transition-colors"
                >
                  {asosiy.title}
                </Link>
              </h1>
              <p className="text-gray-700 text-lg mb-4 line-clamp-3">
                {asosiy.body}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FiClock className="w-4 h-4" /> {asosiy.date}
                </span>
                <Link
                  to={`/detail/${asosiy.id}`}
                  className="text-red-600 font-medium hover:underline"
                >
                  Batafsil
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80"></div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          So‘nggi yangiliklar
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {qolgan.map((post) => {
            const saqlangan = savedPosts.some((p) => p.id === post.id);
            return (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 border border-gray-100 flex gap-4"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-lg w-28 h-28"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">
                    <Link
                      to={`/detail/${post.id}`}
                      className="hover:text-red-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.body}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FiClock className="w-3 h-3" /> {post.date}
                    </span>
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/detail/${post.id}`}
                        className="text-red-600 hover:underline"
                      >
                        Batafsil
                      </Link>
                      <button
                        onClick={() => saqlash(post)}
                        className={`p-1.5 rounded-full transition ${
                          saqlangan
                            ? "text-red-600"
                            : "text-gray-400 hover:text-red-600"
                        }`}
                      >
                        <FiHeart
                          className={`w-4 h-4 ${
                            saqlangan ? "fill-current" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
