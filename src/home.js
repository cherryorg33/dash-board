import React from 'react';
import { Content } from 'antd/es/layout/layout';
import {UserOutlined,BellOutlined, LogoutOutlined,} from '@ant-design/icons';
import {
    BarChartOutlined,
    AreaChartOutlined,
    LineChartOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Badge,Dropdown,Avatar } from 'antd';
import BarChart from './bar';
import PieChart from './piechart';
import ScatterPlot from './Scatter Chart'
import './index.css'
;

const { Header , Sider } = Layout;
const menu = (
    <Menu>
      <Menu.Item key="1">
        <UserOutlined /> My Profile
      </Menu.Item>
      <Menu.Item key="2" >
        <BellOutlined /> Notifications
      </Menu.Item>
      <Menu.Item key="3">
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  const blueText = {
    color: 'blue',
    fontSize: '24px'
  };

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white' 
      }}
    >
    <div className="demo-logo">
        <span style={blueText}>DASH BOARD</span>
    </div>
       <div className="demo-logo" />

      <Menu theme="light" mode="horizontal">
        <Menu.Item key="1">
          <Badge count={3} dot>
            <BellOutlined />
          </Badge>
        </Menu.Item>
        <Menu.Item key="2">
          <Dropdown overlay={menu}>
            <Avatar
              size="small"
              icon={<UserOutlined />}
              style={{ marginRight: '8px' }}
            />
          </Dropdown>
        </Menu.Item>
      </Menu>
      
    </Header>
      <Layout>
      <Sider width={200} style={{background: 'white' }}>
      <Menu mode="vertical" theme="light" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard" icon={<BarChartOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="statistics" icon={<AreaChartOutlined />}>
          Statistics
        </Menu.Item>
        <Menu.SubMenu key="charts" title="Charts" icon={<LineChartOutlined />}>
          <Menu.Item key="chartjs" icon={<BarChartOutlined />} >
            BarChart
          </Menu.Item>
          <Menu.Item key="highcharts" icon={<PieChartOutlined />}>
            Piecharts
          </Menu.Item>
          <Menu.Item key="googlecharts" icon={<PieChartOutlined />}>
            Google Charts
          </Menu.Item>
        </Menu.SubMenu>
        </Menu>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>chartjs</Breadcrumb.Item>
            <Breadcrumb.Item>b</Breadcrumb.Item>
            <Breadcrumb.Item>c</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="scrollable-content"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 550,
              background: colorBgContainer,
            }}
          >
            < BarChart />
            <PieChart />
            <ScatterPlot />
            
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;