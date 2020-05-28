import React, {Component} from 'react'
import './App.css'

export default class App extends Component{

  constructor(){
    super()
    this.state={
      isMobileMenuOpen: false
    }
  }

  toggleMobileMenu = () => {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen })
    console.log('working')
  }

  render(){
    return (
      <div className = 'App'>
        
        <header className= 'header'>
          <div className="logo-hold">
            <img
              alt='Logo'
              src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
              className="logo-img"
            /> 
          </div>
          <nav className= 'nav'>
            <ul className="nav-list">
              <li className="nav-list-item">SERVICES</li>
              <li className="nav-list-item">PORTFOLIO</li>
              <li className="nav-list-item">ABOUT</li>
              <li className="nav-list-item">TEAM</li>
              <li className="nav-list-item">CONTACT</li>
            </ul>
          </nav>
          <nav className='mobile-nav'>
            <button className='mobile-nav-button' >MENU
              
              <img className='hamburger'
              src="https://www.contentformula.com/blog/wp-content/uploads/2016/06/hamburger-menu.png" alt="hamburger"
              onClick={this.toggleMobileMenu}
              />
            </button>
            <ul className={` ${this.state.isMobileMenuOpen ? "mobile-nav-list-open " : "mobile-nav-list"}`}>
              <li className="mobile-nav-list-item">SERVICES</li>
              <li className="mobile-nav-list-item">PORTFOLIO</li>
              <li className="mobile-nav-list-item">ABOUT</li>
              <li className="mobile-nav-list-item">TEAM</li>
              <li className="mobile-nav-list-item">CONTACT</li>
            </ul>
          </nav>
        </header>

        <div className="main">
          
          <h1>Wecome To Our Studio!</h1>
          <h2>IT'S NICE TO MEET YOU</h2>
          <button className= "tell-me-more">TELL ME MORE</button>
        </div>
        
      </div>
    )
  }
}
