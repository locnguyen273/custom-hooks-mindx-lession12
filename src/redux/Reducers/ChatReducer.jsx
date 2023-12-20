//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment:[
        {name:'abc',content:'hello cybersoft'},
        {name:'xyz',content:'hello bc frontend 57'},
    ],

    userComment: {
        name:'',
        content:''
    }
}



const ChatReducer = createSlice({
  name: 'ChatReducer',
  initialState,
  reducers: {
    updateUserCommentAction: (state,action)=>{
        const {id,value} = action.payload;
        state.userComment[id] = value;
    },
    addUserCommentAction: (state,action) => {
        const {payload} = action;
        console.log('action submit',action);
        state.arrComment.push(payload);
    }
  }
});

export const {updateUserCommentAction,addUserCommentAction} = ChatReducer.actions

export default ChatReducer.reducer