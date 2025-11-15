import React from "react";
import { NavLink } from "react-router-dom";
import { FiBookmark } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="Alampir.uz" className="h-10 w-10 rounded" />
          <span className="text-qred font-extrabold text-xl">ALAMPIR.UZ</span>
        </NavLink>

        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-qred font-semibold"
                  : "text-gray-700 hover:text-qred"
              }`
            }
          >
            {t("nav.t1")}
          </NavLink>

          <NavLink
            to="/saved"
            className={({ isActive }) =>
              `flex items-center gap-1 text-sm font-medium transition ${
                isActive
                  ? "text-qred font-semibold"
                  : "text-gray-700 hover:text-qred"
              }`
            }
          >
            <FiBookmark className="text-lg" />
            <span>{t("nav.t2")}</span>
          </NavLink>

          <select
            value={i18n.language}
            onChange={handleChangeLanguage}
            className="ml-4 border border-gray-300 rounded px-2 py-1"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Nav;
