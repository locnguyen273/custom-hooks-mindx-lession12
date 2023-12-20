import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleInputProductAction } from '../../../redux/Reducers/CRUDProductReducer';

const FormProduct = () => {
  //Lấy state form về từ redux
  //hook selector
  const { productInfo } = useSelector(state => state.crudProductReducer);
  //hook dispatch
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const {id,value} = e.target;
    //Tạo ra payload từ id và value người dùng thao tác trên thẻ
    const payload = {id,value}
    const action = handleInputProductAction(payload);

    dispatch(action)
    

  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form className='card' onSubmit={handleSubmit}>
      <div className='card'>
        <h3 className='card-header'>Product info</h3>
        <div className='card-body'>
          <div className='form-group'>
            <p>id</p>
            <input className='form-control' id="id" value={productInfo.id} onInput={handleChange}/>
          </div>
          <div className='form-group'>
            <p>name</p>
            <input className='form-control' id="name" value={productInfo.name}  onInput={handleChange} />
          </div>
          <div className='form-group'>
            <p>price</p>
            <input className='form-control' id="price" value={productInfo.price}   onInput={handleChange}/>
          </div>
        </div>
        <div className='card-footer'>
          <button type='submit' className='btn btn-primary'> Add product</button>
        </div>
      </div>

    </form>
  )
}

export default FormProduct