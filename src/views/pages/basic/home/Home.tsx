import RecipesComponent from 'views/components/basic/recipes'
import './Home.scss'

export default function Home() {

  return (
    <div className='web-home'>
      <h1>Recetas MSR</h1>
      <RecipesComponent />
    </div>
  )
}