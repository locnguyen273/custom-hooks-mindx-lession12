import React, { useCallback, useState } from 'react'
import Comment from './Comment';

const HookUseCallBack = () => {
    let [like, setLike] = useState(1);
    let [number, setNumber] = useState(1);
    const renderLike = () => { //id: 111 , 2222
        return `Like ${like}`
    }
    const callbackRenderLike = useCallback(renderLike,[like]) //111
    //Khi dependency like thay đổi thì useCallback sẽ cache lại địa chỉ lần thay đổi gần nhất
    return (
        <div className="m-5">
            <button onClick={()=>{
                setNumber(number + 1);
            }}>{number}</button> 
            <br />
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            <Comment renderLike={callbackRenderLike} />
        </div>
    )
}
export default HookUseCallBack





// const func = (a , b) => {
//     a =  a * 2
//     b = b * 2
//     let tong = a + b
//     return tong
// }
// let c = 10
// let d = 20
// func(c,d)
// console.log(c,d)
// const addItem = (item,[...lst]) => {
//     lst.push(item);
//     return lst;
// }
// let list_number = [1,2,3,4,5]
// let list_number2 = [7,8,9,10]
// console.log(addItem(1000,list_number))
// console.log(addItem(1000,list_number2))

// console.log(list_number)
// console.log(list_number2)

