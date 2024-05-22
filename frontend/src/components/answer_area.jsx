import { useLayoutEffect, useRef, useState } from 'react';
import {React, Spin} from 'react';
import { AutoComplete, Divider } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
function Answer_area(props) {
    const {answ}= props


    return(  
    <>
    <div className='text-white' style={{overflowY:'scroll'}}>
        <Divider orientation="left" plain>
        <p className='text-white h-full'>Ответ GigaChat</p>
        </Divider>
        <div style={{width:"50%"}}>
            {answ}
        </div>
    </div>
    </>)
}
export default Answer_area;