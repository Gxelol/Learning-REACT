import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Posts } from './components/Posts'
import { Page404 } from './components/Page404'
import { Redirect } from './components/Redirect'
import { Post } from './components/Post'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/posts' element={<Posts />} exact>
          <Route path=':id' element={<Post />}/>
        </Route>
        <Route path='/redirect' element={<Redirect />} exact/>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
