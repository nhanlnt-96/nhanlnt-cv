import React from 'react';
import { Layout } from 'antd';

import './scss/rwd.scss';
import './scss/App.scss';
import 'antd/dist/antd.css';
import SidebarComponent from "./components/sidebar";

const { Content, Sider } = Layout;

function App() {
  return (
    <Layout className='layout-container'>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <SidebarComponent />
      </Sider>
      <Content>
        content
      </Content>
    </Layout>
  );
}

export default App;
