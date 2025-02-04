import { RouterProvider } from 'react-router'
import './App.css'
import { Router } from './Router'
import { Provider } from 'react-redux'
import Store from './components/Redux/Store'
import { UserContext, defaultUser } from './models/Context'
import { useReducer } from "react"
import userReducer from './components/UserReducer'


function App() {
  const [user, userDispatch] = useReducer(userReducer, defaultUser)
  return (
    <>
      <UserContext value={{ user, userDispatch }}>
      <Provider store={Store}>
        <RouterProvider router={Router} />
         </Provider>
      </UserContext>
    </>
  )
}

export default App;
