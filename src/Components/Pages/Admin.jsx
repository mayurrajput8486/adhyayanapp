import React, { useState } from 'react'

const Admin = () => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const loginHandle = () =>{
    if(username === 'ADMIN' && password === 'ADMIN@123'){
      alert('LOGIN SUCCESSFULL')
    }else {
      alert('Wrong Username and Password')
    }
  }


  return (
    <div className='mb-5 mt-5'>
      <h1>Welcome to Admin </h1>
      <div className='w-50 mx-auto bg-secondary p-4 rounded-3'>
        <div className='mb-3'>
          <input type='text'  className='form-control' placeholder='Enter Username' 
          value={username}
          onChange={(event)=>setUsername(event.target.value)}
          />
        </div>
        <div className='mb-3'>
          <input type='password' className='form-control' placeholder='Enter Password'
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
          />
        </div>
        <div>
          <button className='btn btn-success' onClick={loginHandle}>LOGIN</button>
        </div>
      </div>
    </div>

  )
}

export default Admin