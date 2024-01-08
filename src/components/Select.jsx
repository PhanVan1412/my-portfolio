import { useTranslation } from "react-i18next";
import { vi, en } from "../assets/index";

const Select = () => {
  // Default language
  const { i18n } = useTranslation();

  const onVi = (e) => {
    i18n.changeLanguage("vi");
  };

  const onEn = (e) => {
    i18n.changeLanguage("en");
  };

  return (
    <div className="flex items-center gap-1 mr-2">
      <div className="w-[25px] cursor-pointer" onClick={onVi}>
        <img src={vi} alt="vietnamese" />
      </div>
      <div className="w-[2px] h-[10px] bg-white"></div>
      <div className="w-[25px] cursor-pointer" onClick={onEn}>
        <img src={en} alt="english" />
      </div>
    </div>
  );
};

export default Select;
