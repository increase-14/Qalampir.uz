import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 mt-10 py-10 relative">
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between gap-10">
        <div className="w-[60%]">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-14 mb-4" />
            <span className="text-qred font-extrabold text-xl">ALAMPIR.UZ</span>
          </div>

          <div className="flex gap-6 mb-5 text-[18px] text-gray-800">
            <h1>{t("footer.t1")}</h1>
            <h1>{t("footer.t2")}</h1>
            <h1>{t("footer.t3")}</h1>
            <h1>{t("footer.t4")}</h1>
          </div>

          <p className="text-gray-600 text-[15px] leading-6 mb-3">
            {t("footer.t5")}
          </p>

          <p className="text-gray-600 text-[15px] leading-6 mb-3">
            {t("footer.t6")}
          </p>
        </div>
        <div className="text-right w-[40%] mt-[70px]">
          <div className="flex justify-end gap-4 mb-4 text-gray-700">
            <FaFacebookF className="text-[23px] cursor-pointer" />
            <FaYoutube className="text-[23px] cursor-pointer" />
            <FaInstagram className="text-[23px] cursor-pointer" />
            <FaTelegramPlane className="text-[23px] cursor-pointer" />
            <FaTwitter className="text-[23px] cursor-pointer" />
          </div>

          <div className="text-[20px] font-bold text-gray-700">16+</div>
        </div>
      </div>
    </footer>
  );
}
