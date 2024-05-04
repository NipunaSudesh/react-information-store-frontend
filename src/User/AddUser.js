import React, { useState } from 'react'

export default function AddUser() {

    const[user,setUser]=useState({
        name:"",
        Username:"",
        email:"",
        PhoneNumber:""
    });

    const {name,Username,email,PhoneNumber}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded mt-2 p-4 shadow'>
                <h2 className='text-center m-4 '>Rejister User</h2>
                <div className='md-3'>
                    <label htmlFor='Name' className='form-lable mt-2'>Name</label>
                    <input type={"text"} name='name'
                    className='form-control'
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='md-3'>
                    <label htmlFor='Username' className='form-lable mt-2' >User Name</label>
                    <input type={"text"} name='username'
                    className='form-control'
                    placeholder='Enter Your User Name'
                    value={Username}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='md-3'>
                    <label htmlFor='email' className='form-lable mt-2'>Email</label>
                    <input type={"text"} name='email'
                    className='form-control'
                    placeholder='Enter Your email Address'
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='md-3'>
                    <label htmlFor='phoneNumber' className='form-lable mt-2'>Phone Number</label>
                    <input type={"text"} name='PhoneNumber'
                    className='form-control'
                    placeholder='Enter Your Phone Number'
                    value={PhoneNumber}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type='submit' className='btn btn-primary mt-4 shadow'>Submit</button>
                <button type='submit' className='btn btn-danger mt-4 mx-4 shadow'>Cencel</button>
            </div>
        </div>
    </div>
  );
};
