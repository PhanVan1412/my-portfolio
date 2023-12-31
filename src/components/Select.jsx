import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Select = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
  };
  return (
    <div className="flex items-center space-x-8">
      <select
        id="language"
        name="language"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="b border-gray-300 rounded bg-white text-black"
      >
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
    </div>
  );
};

export default Select;
