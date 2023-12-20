import React, {memo} from 'react'

const Comment = ({...props}) => {
  console.log('child component comment')
  
  return (
    <div className='bg-dark text-white p-5'>
      <h3>Like (child component): {props.renderLike()}</h3>
      Comment
    </div>
  )
}

//Sử dụng memo chỉ là shallow compare (so sanh nông (1 cấp)) đối với object thì khi setState ở component cha phải {...} hoặc [...] hoặc cloneDeep (lodash)
export default memo(Comment)