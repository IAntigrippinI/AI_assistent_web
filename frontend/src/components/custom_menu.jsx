import React, { useState, useEffect } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  WechatOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
const items = [
  {
    key: '1',
    icon: <WechatOutlined />,
    label: 'Чат',
  },
  {
    key: '2',
    icon: <UnorderedListOutlined />,
    label: 'Мои задачи',
  },


];


function My_body() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const [pageId, setPageId] = useState(1)

  function pageChange(e){
    setPageId(e.key)
  }

  function fecthPage() {
    console.log(`page : ${pageId}`)
  }


  useEffect( () => {
    fecthPage()
  }, [pageId]);
  return (
    <>
        <div className='mx-auto px-5 gap-4'>
            <div
            style={{
                width: 256,
            }}
            >
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                marginBottom: 1,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                onClick={pageChange}
            />
            </div>
        </div>
    </>
  );
};
export default My_body;