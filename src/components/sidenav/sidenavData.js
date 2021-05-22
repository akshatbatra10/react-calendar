import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
// import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <ImIcons.ImHome3 />,
    cName: "nav-text active",
  },
  {
    id: 2,
    title: "Therapists",
    path: "/",
    icon: <FaIcons.FaUserNurse />,
    cName: "nav-text",
  },
  {
    id: 3,
    title: "Blog",
    path: "/",
    icon: <FaIcons.FaRegNewspaper />,
    cName: "nav-text",
  },
  {
    id: 4,
    title: "Activities",
    path: "/",
    icon: <BsIcons.BsInboxFill />,
    cName: "nav-text",
  },
  {
    id: 5,
    title: "History",
    path: "/",
    icon: <RiIcons.RiHistoryFill />,
    cName: "nav-text",
  },
  {
    id: 6,
    title: "Wallet",
    path: "/",
    icon: <GiIcons.GiWallet />,
    cName: "nav-text",
  },
  {
    id: 7,
    title: "SOS",
    path: "/",
    icon: <AiIcons.AiOutlineMessage />,
    cName: "nav-text",
  },
  {
    id: 8,
    title: "Help",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    id: 9,
    title: "Settings",
    path: "/",
    icon: <BsIcons.BsGearFill />,
    cName: "nav-text",
  },
  {
    id: 10,
    title: "Contact Us",
    path: "/",
    icon: <RiIcons.RiContactsBookLine />,
    cName: "nav-text",
  },
];
