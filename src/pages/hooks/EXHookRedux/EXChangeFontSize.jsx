import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFontSizeAction } from '../../../redux/Reducers/FontSizeReducer';

const EXChangeFontSize = () => {

 const {fSize} = useSelector(state => state.fontSizeReducer)
 const dispatch = useDispatch();
 const handleChangeFontSize = (size) =>{
    const action = changeFontSizeAction(size)
    dispatch(action);
 }
 

  return (
    <div className='container'>
        <h3>Change font size</h3>
        <p style={{fontSize:fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsam ut magnam. Saepe accusamus error odit eligendi quis iusto explicabo dolorum itaque, praesentium autem sint labore laudantium laboriosam, mollitia expedita!</p>
        <button className='btn btn-primary m-2' onClick={()=>{
            handleChangeFontSize(1)
        }}>+</button>
        <button className='btn btn-primary m-2' onClick={()=>{
            handleChangeFontSize(-1)

        }}>-</button>
    </div>
  )
}

export default EXChangeFontSize