import { useState } from 'react'
import {Spin} from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Spin/>
    </div>
  )
}

export default App
