import {useState, useRef} from 'react'
import './Navbar.css'
import { TiMinusOutline } from "react-icons/ti";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
const [menu, setMenu] = useState("home")
const menuRef = useRef()

const openMenu = () => {
  menuRef.current.style.right='0'
}
const closeMenu = () => {
  menuRef.current.style.right='-350px'
}


  return (
    <div className='navbar'>
<h2 className='logo'>Justice</h2>
<IoMdMenu onClick={openMenu} className='nav-mob-open'/>
<ul ref={menuRef} onClick={closeMenu} className="nav-menu">
  <MdCancel className='nav-mob-close' />
    <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink >{menu === 'home'?<TiMinusOutline className='icon' />:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')}>About Me</p></AnchorLink>{menu === 'about'?<TiMinusOutline className='icon'/>:<></>}</li>
    <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('services')}>Services</p></AnchorLink>{menu === 'services'?<TiMinusOutline className='icon'/>:<></>}</li>
    {/* <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={() => setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu === 'portfolio'?<TiMinusOutline className='icon'/>:<></>}</li> */}
    <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact'?<TiMinusOutline className='icon'/>:<></>}</li>
</ul>
<div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar