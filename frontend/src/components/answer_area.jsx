import React from 'react';
import { Divider } from 'antd';
function Answer_area(props) {
    const {answ}= props
    return(  
    <>
    <div style={{width:screen}} className='text-white'>
        <Divider orientation="left" plain>
        <p className='text-white'>Ответ GigaChat</p>
        </Divider>
        <p className=''>
        {answ}
        </p>

        </div>
    </>)
}
export default Answer_area;