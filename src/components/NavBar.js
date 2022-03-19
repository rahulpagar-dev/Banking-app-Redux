import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {


  return (
    <div>
      <nav className="navbar is-transparent">
  <div className="navbar-brand" >
    
      <Link to="/"><h2 className='title is-3 is-primary navbar-item' style={{color:"#56BBF1"}}> Rahul Bank</h2></Link>
      
    
    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <Link to="" className="navbar-item" >Home</Link>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="#">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="#">
            Overview
          </a>
          <a className="navbar-item" href="#">
            Modifiers
          </a>
          <a className="navbar-item" href="#">
            Columns
          </a>
          <a className="navbar-item" href="#">
            Layout
          </a>
          <a className="navbar-item" href="#">
            Form
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          
          <Link to="/Login" className="button is-primary" >Login</Link>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar;
