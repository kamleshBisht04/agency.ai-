import assets from "../../assets/assets";
import Logo from "../Logo/Logo";
import { navItems } from "../constant/constant";

const Footer = ({ theme }) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-16 mt-20 sm:mt-40 px-4  sm:px-10 lg:px-24 xl:px-40">
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        {/* left section */}
        <div className="space-y-5  text-sm text-gray-700 dark:text-gray-400">
          <Logo theme={theme} />
          <p className="max-w-md mt-5 ">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
          <div className="flex gap-14 ">
            {navItems.map((item) => {
              return (
                <div key={item.id} className="hover:text-primary">
                  <a href={item.value}>{item.title}</a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right section */}
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="text"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
              placeholder="Enter your email."
            />
            <button className="bg-primary text-white rounded px-6">Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />
      {/* footer bootom */}
      <div className="pb-6 text-sm text-gray-600 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p> Copyright 2026 @ kamelsh -All Right Reserrved.</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="facebook icon" />
          <img src={assets.twitter_icon} alt="twitter icon" />
          <img src={assets.instagram_icon} alt="instagram icon" />
          <img src={assets.linkedin_icon} alt="linkedin icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
