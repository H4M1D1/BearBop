import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const[button,setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerwidth <=960){
      setButton(false);
    }
    else{
      setButton(true)
    }
  };


  useEffect(() =>{
    showButton()
  },[]);
  
  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                  Bearᗺop <i class="fa-solid fa-paw"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'> 
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'> 
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'> 
                    <Link to='/collection' className='nav-links' onClick={closeMobileMenu}>
                      Collection
                    </Link>
                  </li>
                  <li className='nav-item'> 
                    <Link to='/buy' className='nav-links-mobile' onClick={closeMobileMenu}>
                      BUY
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>BUY</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar