import React from 'react'
import Child from './components/Child'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Skills from './pages/skills'
import Form from './pages/Form'
import Navbar from './components/Navbar'
import {Route , Routes} from 'react-router-dom'
import Login from './pages/Login'
import Count from './components/Count'
const App = () => {
  var arr = ['hii' , 'hello' , ' bye']
  var user = {username : "jagadheesh" , pass : "12345678"};
  return (
    <div>
       <Navbar/>
       <Login/>
       <Count/>
       <Routes>
          <Route path ='/about' element = {<About/>}/>
          <Route path ='/home' element = {<Home items ={arr}/>}/>
       </Routes>
    </div>
  )
}

export default App