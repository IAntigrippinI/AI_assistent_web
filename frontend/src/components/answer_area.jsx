import React from 'react';
import { Divider } from 'antd';
function Answer_area(props) {
    const {answ}= props
    return(  
    <>
    <div>
        <Divider orientation="left" plain>
        Ответ GigaChat
        </Divider>
        <p>
        {answ}
        </p>

        </div>
    </>)
}
export default Answer_area;