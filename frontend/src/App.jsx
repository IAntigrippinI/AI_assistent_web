import React from 'react'
import { useState } from 'react'
import {Spin} from 'antd'
import Text_area from './components/textArea'
import My_body from './components/custom_menu'



function App() {
  return (
    <div className='flex my-3 mx-auto'>
      <My_body/>
      <Text_area/>
    </div>
  ) 
}

export default App
