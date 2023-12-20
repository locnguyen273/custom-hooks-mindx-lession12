import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addUserCommentAction, updateUserCommentAction } from '../../../redux/Reducers/ChatReducer';
const ExChatDemo = () => {
    //hook useSelector tương tự mapStateToProps
    const {userComment,arrComment} = useSelector((state)=>state.chatReducer);

    console.log('state redux',userComment)
    //sử dụng hook useDispatch thay cho this.props.dispatch
    const dispatch = useDispatch();
    const handleChangeValue = (e) => {
        const {id,value} = e.target;
        //Gửi dữ liệu lên redux
        const payload = {
            id:id,
            value:value
        }
        const action = updateUserCommentAction(payload)
        //Gửi dữ liệu action lên redux
        dispatch(action)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const payload = userComment;
        const action = addUserCommentAction(payload);

        //Dispatch action lên redux
        dispatch(action)
    } 



    return (
        <div className='container'>
            <h3>Demo chat</h3>
            <div className='card'>
                <div className='card-header'>
                    {arrComment.map((usComment)=>{
                        return  <div className='d-flex mt-2'>
                        <div style={{width:'10%'}}>
                            <img src={`https://i.pravatar.cc?u=${usComment.name}`} alt="..." style={{width:50}}/>
                            <h5 className='text text-danger'>{usComment.name}</h5>
                        </div>
                        <div style={{width:'90%'}}>
                            <p>{usComment.content}</p>
                        </div>
                    </div>
                    })}
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <h3>Name</h3>
                            <input className='form-control' id="name" value={userComment.name} onInput={handleChangeValue}/>
                        </div>
                        <div className='form-group'>
                            <h3>Content</h3>
                            <input className='form-control' id="content" value={userComment.content}  onInput={handleChangeValue}/>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-primary' type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ExChatDemo