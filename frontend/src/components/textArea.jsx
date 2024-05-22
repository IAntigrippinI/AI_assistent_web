import React, { useState } from 'react';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
import axios from 'axios'
import Answer_area from './answer_area';
const { TextArea } = Input;




function Text_area() {
  const [dataText, setDataText] = useState()
  const [answerData, setAnswerData] = useState('Welcome!')

  function handleClick(e) {
    console.log('click')
    axios.get(`http://127.0.0.1:8000/gigachat/quastion?quastion=${dataText}?`).then(responce => {
      setAnswerData(responce.data)
    })
  }  

  function changeText(e) {
    setDataText(e.target.value)
  }

return (
  <>
    <div className='flex-auto gap-10 mr-10' style={{width:screen}}> 
    <div className='text-white'>
        <Answer_area answ = {answerData}/>
      </div>
      <div className='mx-auto my-auto'>
        <TextArea onChange={changeText} rows={4} placeholder="maxLength is 255" maxLength={255} style={{width:screen}}/>
        <Flex gap="small" wrap className=''>
            <Button onClick = {handleClick} type="primary">Спросить</Button>
        </Flex>
      </div>
      
    </div>
  </>
);}
export default Text_area;