import { createContext } from "react"
import initialRecipeState from "./initialRecipesState"
const RecipesContext = createContext(initialRecipeState)

export default RecipesContext