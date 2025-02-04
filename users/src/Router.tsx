import { createBrowserRouter } from "react-router"
import LayOut from "./components/LayOut"
import About from "./components/About"
import Home from "./components/Home"
import RecipesList from "./components/RecipesList"
import AddRecipe from "./components/AddRecipe"


export const Router = createBrowserRouter([
    {
        path: '/', element: <LayOut />,
        errorElement: <div>error</div>,
        children: [
            { path: 'Home', element: <Home /> },
            { path: 'About', element: <About /> },
            { path: 'RecipesList', element: <RecipesList /> },
            { path: 'AddRecipe', element: <AddRecipe /> }
        ]
    }
])
