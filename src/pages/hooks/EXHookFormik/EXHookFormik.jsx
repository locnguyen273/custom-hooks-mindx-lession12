import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
const EXHookFormik = () => {

    const frmRegister = useFormik({
        initialValues:{
            fullName:'',
            phone:'',
            password:'',
            email:''
        },
        validationSchema:yup.object().shape({
            fullName: yup.string().required('fullname cannot be blank!'),
            phone:yup.string().required('phone cannot be blank!').min(6, 'phải nhiều hơn 6 bằng ký tự').max(10,'phải bé hơn bằng 10 ký tự'),
            email:yup.string().required('email cannot be blank').email('email is invalid').matches(/cybersoft/,'thiếu chữ cybersoft')
        }),
        onSubmit: (value) => {
            console.log(value)
        }
    })
   


  return (
    <form className='container' onSubmit={frmRegister.handleSubmit}>
        <h3>Register form</h3>
        <div className="form-group">
            <p>fullName</p>
            <input id='fullName' name='fullName' className="form-control" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur} />
            <p className='text text-danger'>
                {frmRegister.errors.fullName && frmRegister.errors.fullName}
            </p>
        </div>
        <div className="form-group">
            <p>phone</p>
            <input id='phone' name='phone' className="form-control" onChange={frmRegister.handleChange} onBlur={frmRegister.handleBlur}/>
            <p className='text text-danger'>
                {frmRegister.errors.phone && frmRegister.errors.phone}
            </p>
        </div>
        <div className="form-group">
            <p>email</p>
            <input id='email' name='email' className="form-control" onChange={frmRegister.handleChange}  onBlur={frmRegister.handleBlur}/>

            <p className='text text-danger'>
                {frmRegister.errors.email && frmRegister.errors.email}
            </p>
        </div>
        <div className="form-group">
            <p>password</p>
            <input id='password' name='password' className="form-control" onChange={frmRegister.handleChange}/>
        </div>
        <div className='form-group mt-2'>
            <button className="btn btn-dark" type="submit">Register</button>
        </div>
    </form>
  )
}

export default EXHookFormik