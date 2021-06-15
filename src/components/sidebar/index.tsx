import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../imgs/avatar.jpg';
import { sidebarConfig } from "../../configs/sidebar.config";
import { Menu } from "antd";

import './Sidebar.scss'
import { Footer } from "antd/es/layout/layout";
import { FacebookOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const SidebarComponent: FC = () => {
  return (
    <>
      <div className="logo">
        <div className="logo-img">
          <img src={Avatar} alt="avatar-cv" />
        </div>
        <h1>THIEN NHAN</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {
          sidebarConfig.map((val) => (
            <Menu.Item key={val.id} icon={val.icon}>
              <Link to={val.path}>{val.label}</Link>
            </Menu.Item>
          ))
        }
      </Menu>
      <Footer className='sider-footer'>
        <div className="social-icon">
          <FacebookOutlined />
          <LinkedinOutlined />
          <GithubOutlined />
        </div>
        <p>©2021 NhanLNT</p>
      </Footer>
    </>
  );
};

export default SidebarComponent;