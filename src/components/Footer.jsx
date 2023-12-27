import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer text-center flex justify-center gap-1 items-center text-white text-[17px] py-5 font-medium bg-primary">
      Made with love
      <FaHeart className="text-red-600" />
      <span className="font-semibold">P&T</span>
    </div>
  );
};

export default Footer;
