import React from 'react';

import { NavLink } from 'react-router-dom';

import { Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const AppMenu = props => (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
    {
      props.menu.map(item => (
        Array.isArray(item.children) && item.children.length > 0 ? (
          <SubMenu
            key={item.id}
            title={
              <span>
                <UserOutlined />
                <span>{item.label}</span>
              </span>
            }
          >
            {
              item.children.map(child => (
                <Menu.Item key={child.id}>
                  <NavLink to={child.to} key={child.id}>
                    <PieChartOutlined />
                    <span>{child.label}</span>
                  </NavLink>
                </Menu.Item>
              ))
            }
          </SubMenu>
        ) : (
            <Menu.Item key={item.id} >
              <NavLink to={item.to} key={item.id}>
                <PieChartOutlined />
                <span>{item.label}</span>
              </NavLink>
            </Menu.Item>
          )
      ))
    }
  </Menu>
);

export default AppMenu;