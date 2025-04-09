import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navlogo"><img src={logo} alt="" /></div>
      <ul className="navmenu">
      <li>Home</li>
      <li>Explore</li>
      <li>About</li>
      <li className='navcontact'>Contact</li>
     </ul>
    </div>
  )
}

export default Navbar