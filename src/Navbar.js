import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {

  const { openSidebar,openSubmenu} = useGlobalContext()
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    openSubmenu(page, { center });
  };

  return (  
  <nav className='nav' >
    <div className="nav__center">
      <div className="nav__header">
        <img src={logo} alt="logo" className="nav__logo" />
        <button className='btn btn__nav btn__toggle' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className='nav__links'>
          <li>
            <button className='btn nav__links-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='btn nav__links-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='btn nav__links-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn btn__signin'>Sign in</button>
      </div>
  </nav>
  )


}

export default Navbar
   