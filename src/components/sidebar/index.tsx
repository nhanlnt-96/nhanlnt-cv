import React, { FC } from 'react';
import Avatar from '../../imgs/avatar.jpg';
import { sidebarConfig } from "../../configs/sidebar.config";
import { Menu } from "antd";

import './Sidebar.scss'

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
              {val.label}
            </Menu.Item>
          ))
        }
      </Menu>
      <div className="sider-footer">

      </div>
    </>
  );
};

export default SidebarComponent;