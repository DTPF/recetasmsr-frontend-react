import { NavLink } from "react-router-dom"
import MenuTopMain from 'views/components/basic/layout/menuTop/MenuTopMain'
import Search from 'views/components/basic/layout/search'
import LoginIcon from 'views/components/basic/layout/loginIcon'
import Logo from 'assets/img/Logo-MSR.png'
import './HeaderMain.scss'

export default function HeaderMain() {
  return (
    <header className='header-main'>
      <NavLink to={'/'} >
        <img src={Logo} className="header-main__logo" alt='logo' />
      </NavLink>
      <MenuTopMain />
      <LoginIcon />
      <Search />
    </header>
  )
}
