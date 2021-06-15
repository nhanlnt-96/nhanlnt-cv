import React from 'react';
import { Layout } from 'antd';

import './scss/rwd.scss';
import './scss/App.scss';
import 'antd/dist/antd.css';
import SidebarComponent from "./components/sidebar";
import LayoutModule from "./components/layoutModule";

const { Sider } = Layout;

function App() {
  return (
    <Layout className='layout-container'>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <SidebarComponent />
      </Sider>
      <LayoutModule />
    </Layout>
  );
}

export default App;
