import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Expenses from '../Expenses';
import Income from '../Income';
import Categories from '../Categories';
import AppMenu from '../../components/AppMenu';

import { Layout, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './index.css';

import { menu } from './menu';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <AppMenu menu={menu} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              <Route exact path='/expenses' component={Expenses} />
              <Route exact path='/income' component={Income} />
              <Route exact path='/categories' component={Categories} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout >
  );
};

export default Dashboard;