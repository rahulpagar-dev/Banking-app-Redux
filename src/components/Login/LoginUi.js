import React from 'react'
import { Link } from 'react-router-dom'
import "./LoginUi.css"

function LoginUi() {
  return (
    <>
    <div id="ParentContainer">
      <div className="is-max-desktop mt-5" id="LoginContainer">
        <h3 className='has-text-primary is-size-3 has-text-centered mb-2'>User Login</h3>
        <div className="notification is-primary">
          <input type="text" className='input is-primary mgt-large' placeholder='Enter User Name' />
          <input type="password" className='input is-primary mt-1' placeholder='Enter Password' />
          <Link id='Link1' to="/Account"><button className='button is-link mgt-medium mt-2'> Login</button></Link>

          <Link id='Link2' to="/"><button className='button is-danger ml-2 mgt-medium mt-2'> Close</button></Link>
          <button className='button is-success ml-2 mgt-medium mt-2 is-light'> Update</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default LoginUi
