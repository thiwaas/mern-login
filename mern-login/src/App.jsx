// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-In</h2>
        <form action="">
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter email'autoComplete='off' name='email' className='form-control rounded-0'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-0'/>
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'> Log in</button>
          <p>You are agree to our terms and policies</p>
          <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create</button>
        </form>
      </div>
      
    </div>
  )
}

export default App
