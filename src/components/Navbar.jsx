import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { BiSolidBell } from "react-icons/bi";
import Profile from "../assets/profile.png";
import { GoHomeFill } from "react-icons/go";
import { useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
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
import { AiOutlineCloseCircle, AiOutlineGift } from "react-icons/ai";
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [open, setOpen] = useState(false);

  return (
    <div className=" w-full flex flex-col bg-white">
      <div className="flex border-b-[1px] items-center p-5 justify-between">
        <h4>
          {currentPath === "/conversations" ? "Conversations" : "Dashboard"}
        </h4>
        <div className="flex gap-x-4 items-center max-[425px]:hidden">
          <div className="flex items-center text-[#1c1d22] p-2 rounded-[8px] gap-x-3 bg-[#FEF5EA]  ">
            <p className="text-[#1c1d22]">Nancy's Shop</p>
            <FiChevronDown size={22} />
          </div>
          <BiSolidBell size={22} color="#5570f1" />
          <img width={40} src={Profile} />
        </div>
        <div onClick={() => setOpen(!open)} className="flex min-[426px]:hidden">
          <BiMenuAltRight />
        </div>
      </div>
      <div className="flex gap-x-2">
        <GoHomeFill color="#5570f1" className="ml-4 mt-[1px]" size={19} />{" "}
        <p>{currentPath === "/conversations" ? " / conversations" : ""}</p>
      </div>
      {open && (
        <div className="absolute flex w-full bg-[rgba(0,0,0,0.5)] z-20 h-[100vh]">
          <div className="flex w-[30%] p-4 bg-white">
            <div className="flex flex-col  space-y-2 text-[#53545C]">
              <img className="mb-10" width={60} src={Logo2} />
              <Link
                onClick={() => setOpen(false)}
                className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
                to="/"
              >
                <BiCategory size={22} className="hover:text-[white]" />
                <p className=" max-[1080px]:hidden">Dashboard</p>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
                to="/"
              >
                <SlHandbag
                  size={22}
                  className="flex gap-x-4 hover:text-[white]"
                />
                <p className=" max-[1080px]:hidden">Orders</p>
                <div className="flex bg-[#FFCC91] justify-center items-center w-[20px] h-[20px] rounded-full text-[12px]">
                  3
                </div>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
                to="/"
              >
                <HiOutlineUsers size={22} className="hover:text-[white]" />
                <p className=" max-[1080px]:hidden">Customers</p>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
                to="/"
              >
                <HiOutlineFolderMinus
                  size={22}
                  className="hover:text-[white]"
                />
                <p className=" max-[1080px]:hidden">Inventory</p>
              </Link>
              <Link
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
                className="flex items-center gap-x-3 p-4 rounded-[12px] hover:bg-[#5570f1] hover:text-[white] text-[14px]"
                to="/"
              >
                <SlSettings size={22} className="hover:text-[white]" />
                <p className=" max-[1080px]:hidden">Settings</p>
              </Link>
              <div className="flex flex-col space-y-6 mt-[8%]  py-8">
                <div className="flex flex-col space-y-4">
                  <div
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-x-3 w-max text-[14px] text-[#1C1D22] rounded-[16px] p-3 bg-[rgba(94,99,102,0.10)]"
                  >
                    <PiHeadphonesBold size={22} />
                    <p className=" max-[1080px]:hidden">Contact Support</p>
                  </div>
                  <div className="flex flex-col w-max text-[14px] space-y-6 py-4 text-[#1C1D22] rounded-[16px] p-3 bg-[rgba(255,204,145,0.20)]">
                    <div
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-x-3"
                    >
                      <AiOutlineGift size={22} />
                      <p className=" max-[1080px]:hidden">
                        Free Gift Awaits You!
                      </p>
                    </div>
                    <div className="flex gap-x-3 items-center max-[1080px]:hidden text-[#6E7079] text-[12px]">
                      Upgrade your account <FiChevronRight />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setOpen(false)}
                  className="flex items-center pl-4 gap-x-3 text-[#CC5F5F]"
                >
                  <IoLogOut size={22} />
                  <p className=" max-[1080px]:hidden">Logout</p>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setOpen(false)}
            className="flex bg-white h-[50px] w-[50px] items-center justify-center"
          >
            <AiOutlineCloseCircle size={22} color="grey" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
