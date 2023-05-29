import RecipesProvider from 'context/recipes/RecipesProvider'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

export default function App() {
  return (
    <RecipesProvider>
      <RouterProvider
        router={router}
        fallbackElement={<></>}
      />
    </RecipesProvider>
  )
}