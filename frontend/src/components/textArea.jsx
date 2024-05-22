import React, { useState } from 'react';
import { Input } from 'antd';
import { Button, Flex, Spin } from 'antd';
import axios from 'axios'
import Answer_area from './answer_area';
const { TextArea } = Input;




function Text_area() {
  const [dataText, setDataText] = useState()
  const [answerData, setAnswerData] = useState(null)

  function handleClick(e) {
    console.log('click')
    axios.get(`http://127.0.0.1:8000/gigachat/quastion?quastion=${dataText}?`).then(responce => {
      setAnswerData(responce.data)
      console.log(`resp: ${responce.data}`)
    })
  }  

  function changeText(e) {
    setDataText(e.target.value)
  }

return (
  <>
    <div className='relative border-solid border-green-900 content-end p-5 my-8 text-white' style={{width:screen}}> 
      <div className='text-white ml-10'>
          {answerData ? <Answer_area answ = {answerData}/> : <Spin/>}
      </div>
      <div>
        <TextArea  onChange={changeText} rows={4} placeholder="maxLength is 255" maxLength={255}/>
        <Flex gap="small" wrap>
            <Button onClick = {handleClick} type="primary">Спросить</Button>
        </Flex>
      </div>
    </div>
  </>
);}
export default Text_area;