import React from 'react';
import './form.css';

const Form = () => {
  return (
    <div className='forum'>
      
        <h1>Contact us</h1>

        <form>
          
          <label>Name:</label>
          <input type="text" placeholder='Enter name'></input>

          <label>Email:</label>
          <input type="email" placeholder='example@gmail.com'></input>

          <label>Message:</label>
          <textarea placeholder='Enter message...'></textarea>

          <input type="submit"></input>

        </form>
    </div>
  )
}

export default Form