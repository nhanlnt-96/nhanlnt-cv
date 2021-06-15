import React from "react";
import { AppstoreOutlined, FileTextOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";

export const sidebarConfig = [
  {
    id: 1,
    icon: <HomeOutlined />,
    label: "HOME",
    path: "/"
  },
  {
    id: 2,
    icon: <FileTextOutlined />,
    label: "RESUME",
    path: "/resume"
  },
  {
    id: 3,
    icon: <AppstoreOutlined />,
    label: "PORTFOLIO",
    path: "/portfolio"

  },
  {
    id: 4,
    icon: <PhoneOutlined />,
    label: "CONTACT",
    path: "/contact"
  }
];