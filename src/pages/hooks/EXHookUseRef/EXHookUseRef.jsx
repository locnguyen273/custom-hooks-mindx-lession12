import React, { useRef, useState } from 'react'
import ChildComponent from './ChildComponent';
//useRef: Thường sử dụng để lưu lại các giá trị sau mỗi lần render (setState, dispatch Redux)
//Ngoài ra useRef còn được dùng để tham chiếu (dom đến) 1 thẻ html hoặc thẻ component, khi dom đến thẻ component thì ta có thể truy xuất được tất cả thuộc tính và phương thức của component đó

const EXHookUseRef = () => {
    const [like,setLike] = useState(1);
    const refLogin = useRef({
                username:'',
                password:''
    });
    const refDom = useRef();
    const refDomChildComponent = useRef();
    // const [userLogin,setUserLogin] = useState({
    //     username:'',
    //     password:''
    // })
    // let userLogin = {
    //     username:'',
    //     password:''
    // }
    // console.log(userLogin);
    const handleChangeInput = (e) => {
        const {id,value} = e.target;
        refLogin.current[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refLogin.current)
        //Ngoài ra ref cũng dùng để dom đến các thẻ tuy nhiên ta có thể quản lý được dễ dàng thông qua biến ref trên component đó
        refDom.current.className = 'btn btn-dark'
    }
  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>username</p>
            <input className="form-control" id="username" name="username" onInput={handleChangeInput} />
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className="form-control" id="password" name="password" type="password"  onInput={handleChangeInput}/>
        </div>
        <div className='form-group mt-2' >
            <button className='btn btn-success' ref={refDom}>Login</button>
        </div>

        <button className='btn btn-danger m-2' onClick={()=>{
            setLike(like + 1)
        }}><i className="fa fa-heart fa-2x"></i>{like}</button>

        <ChildComponent ref={refDomChildComponent} />

        <button onClick={()=>{

            let state = refDomChildComponent.current.state;
            console.log(refDomChildComponent.current.setState({
                number: state.number + 1
            }))

        }}>
            Get element component
        </button>
    </form>
  )
}

export default EXHookUseRef