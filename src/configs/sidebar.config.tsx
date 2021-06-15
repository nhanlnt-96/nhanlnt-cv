import React from "react";
import { AppstoreOutlined, FileTextOutlined, HomeOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";

export const sidebarConfig = [
  {
    id: 1,
    icon: <HomeOutlined />,
    label: "HOME"
  },
  {
    id: 2,
    icon: <UserOutlined />,
    label: "ABOUT ME"
  },
  {
    id: 3,
    icon: <FileTextOutlined />,
    label: "RESUME"
  },
  {
    id: 4,
    icon: <AppstoreOutlined />,
    label: "PORTFOLIO"
  },
  {
    id: 5,
    icon: <PhoneOutlined />,
    label: "CONTACT"
  }
];