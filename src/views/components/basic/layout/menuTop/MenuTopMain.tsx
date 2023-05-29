import { NavLink } from "react-router-dom"
import './MenuTopMain.scss'
import favIcon from 'assets/img/favorito.png'

export default function MenuTop() {
  return (
    <div className='menu-top'>
      <NavLink key='my-recipes' to={"/my-recipes"}>Mis Recetas</NavLink>
      <NavLink key='favourites' to={"/favourites"}>
        <img src={favIcon} alt='userIcon' />
      </NavLink>
    </div>
  )
}