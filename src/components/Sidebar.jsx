import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Graph.png";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { SlHandbag, SlSettings } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import {
  HiOutlineFolderMinus,
  HiOutlineChatBubbleOvalLeftEllipsis,
} from "react-icons/hi2";
import { PiHeadphonesBold } from "react-icons/pi";
import { FiChevronRight } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";
import { AiOutlineGift } from "react-icons/ai";
const Sidebar = () => {
  const [chartWidth, setChartWidth] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setChartWidth(width <= 1080 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-[300px] max-[1080px]:w-[130px] bg-white p-6 py-4 flex flex-col justify-between h-full">
      <div className="flex flex-col  space-y-2 text-[#53545C]">
        <img
          className="mb-10"
          width={chartWidth ? 60 : 120}
          src={chartWidth ? Logo2 : Logo}
        />

        <Link
          className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
          to="/"
        >
          <BiCategory size={22} className="hover:text-[white]" />
          <p className=" max-[1080px]:hidden">Dashboard</p>
        </Link>
        <Link
          className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
          to="*"
        >
          <SlHandbag size={22} className="flex gap-x-4 hover:text-[white]" />
          <p className=" max-[1080px]:hidden">Orders</p>
          <div className="flex bg-[#FFCC91] justify-center items-center w-[20px] h-[20px] rounded-full text-[12px]">
            3
          </div>
        </Link>
        <Link
          className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
          to="*"
        >
          <HiOutlineUsers size={22} className="hover:text-[white]" />
          <p className=" max-[1080px]:hidden">Customers</p>
        </Link>
        <Link
          className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
          to="*"
        >
          <HiOutlineFolderMinus size={22} className="hover:text-[white]" />
          <p className=" max-[1080px]:hidden">Inventory</p>
        </Link>
        <Link
          className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
          to="/conversations"
        >
          <HiOutlineChatBubbleOvalLeftEllipsis
            size={22}
            className="flex gap-x-4 hover:text-[white]"
          />
          <p className=" max-[1080px]:hidden">Conversations</p>
          <div className="flex bg-[#FFCC91] justify-center items-center w-[20px] h-[20px] rounded-full text-[12px]">
            16
          </div>
        </Link>
        <Link
          className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
          to="*"
        >
          <SlSettings size={22} className="hover:text-[white]" />
          <p className=" max-[1080px]:hidden">Settings</p>
        </Link>
      </div>
      <div className="flex flex-col space-y-6 mt-[8%] py-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-x-3 w-max text-[14px] text-[#1C1D22] rounded-[16px] p-3 bg-[rgba(94,99,102,0.10)]">
            <PiHeadphonesBold size={22} />
            <p className=" max-[1080px]:hidden">Contact Support</p>
          </div>
          <div className="flex flex-col w-max text-[14px] space-y-6 py-4 text-[#1C1D22] rounded-[16px] p-3 bg-[rgba(255,204,145,0.20)]">
            <div className="flex items-center gap-x-3">
              <AiOutlineGift size={22} />
              <p className=" max-[1080px]:hidden">Free Gift Awaits You!</p>
            </div>
            <div className="flex gap-x-3 items-center max-[1080px]:hidden text-[#6E7079] text-[12px]">
              Upgrade your account <FiChevronRight />
            </div>
          </div>
        </div>
        <div className="flex items-center pl-4 gap-x-3 text-[#CC5F5F]">
          <IoLogOut size={22} />
          <p className=" max-[1080px]:hidden">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
