import React from 'react';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
const { TextArea } = Input;

function Text_area() {
    
return (
  <div className='flex-col mx-auto my-auto'>
    <TextArea rows={4} placeholder="maxLength is 255" maxLength={255} style={{width:200}}/>
    <Flex gap="small" wrap className=''>
        <Button type="primary">Спросить</Button>
    </Flex>
  </div>
);}
export default Text_area;