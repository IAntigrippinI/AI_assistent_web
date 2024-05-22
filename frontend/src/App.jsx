import React from 'react'
import { useState, useEffect } from 'react'
import {Spin} from 'antd'
import Text_area from './components/textArea'
import My_body from './components/custom_menu'
import Tasks from './components/tasks'
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



function App() {

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
        <div className='px-5 gap-4 flex h-screen mt-10'>
            <div>
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
            <div className='w-screen h-screen'>
              {pageId == 1 ? <Text_area className='text-white'/> : <Tasks/>}
            </div>
        </div>
       
    </>
  );
}

export default App
