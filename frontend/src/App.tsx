import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {SignUp} from "./pages/SignUp"
import {SignIn} from "./pages/SignIn"
import {Blog} from "./pages/Blog"
import {Blogs} from "./pages/Blogs"
import {Publish} from "./pages/publish"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />}/>
          <Route path='/SignUp' element={<SignUp />}/>
          <Route path='/SignIn' element={<SignIn />}/>
          <Route path='/Blog/:id' element={<Blog />}/>
          <Route path='/Blogs' element={<Blogs />}/>
          <Route path='/publish' element={<Publish />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
