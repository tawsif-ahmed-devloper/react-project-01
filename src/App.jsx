import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider } from "react-router-dom"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import RootLayout from "./components/layout/RootLayout"


const router = createBrowserRouter(createRoutesFromElements(

  <Route element={<RootLayout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Route>



))




function App() {
 

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
