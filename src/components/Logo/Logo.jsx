import assets from "../../assets/assets";

const Logo = ({ theme }) => {
  return (
    <img
      src={theme === "dark" ? assets.logo_dark : assets.logo}
      className="w-32 sm:w-40"
      alt="agency.ai brand logo"
    />
  );
};

export default Logo;
