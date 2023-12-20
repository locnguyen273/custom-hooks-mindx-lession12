import React, { useState } from 'react'
import { Rate } from 'antd';

const AntDemo = () => {
  const [state,setState] = useState(1)

  return (
    <div className='container'>
        <h3>Antd demo</h3>
        Điểm : {state}
        <br />
        <Rate allowHalf value={state} onChange={(value)=>{
            setState(value)
        }}	/>
    </div>
  )
}

export default AntDemo