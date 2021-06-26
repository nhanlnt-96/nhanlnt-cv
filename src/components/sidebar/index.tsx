import React, { FC } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../imgs/avatar.jpg";
import { sidebarConfig } from "../../configs/sidebar.config";
import { Menu } from "antd";

import "./Sidebar.scss";
// import { Footer } from "antd/es/layout/layout";
// import {
//   FacebookOutlined,
//   GithubOutlined,
//   LinkedinOutlined,
// } from "@ant-design/icons";

const SidebarComponent: FC = () => {
  return (
    <>
      <div className='logo'>
        <div className='logo-img'>
          <img src={Avatar} alt='avatar-cv' />
        </div>
        <h1>THIEN NHAN</h1>
      </div>
      <Menu theme='dark' mode='inline'>
        {sidebarConfig.map((val) => (
          <Menu.Item key={val.id} icon={val.icon}>
            <Link to={val.path}>{val.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
      {/*<Footer className='sider-footer'>*/}
      {/*  <div className='social-icon'>*/}
      {/*    <a*/}
      {/*      href='https://www.facebook.com/thiennhan.lenguyen/'*/}
      {/*      target='_blank'*/}
      {/*      rel='noreferrer'*/}
      {/*      className='down-link'*/}
      {/*    >*/}
      {/*      <FacebookOutlined style={{ fontSize: "20px" }} />*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href='https://www.linkedin.com/in/nhanlnt'*/}
      {/*      target='_blank'*/}
      {/*      rel='noreferrer'*/}
      {/*      className='down-link'*/}
      {/*    >*/}
      {/*      <LinkedinOutlined style={{ fontSize: "20px" }} />*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href='https://github.com/nhanlnt-96'*/}
      {/*      target='_blank'*/}
      {/*      rel='noreferrer'*/}
      {/*      className='down-link'*/}
      {/*    >*/}
      {/*      <GithubOutlined style={{ fontSize: "20px" }} />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <p>©2021 NhanLNT</p>*/}
      {/*</Footer>*/}
    </>
  );
};

export default SidebarComponent;
