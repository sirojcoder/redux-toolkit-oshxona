import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Oshpaz from './pages/oshpaz/Oshpaz.jsx'
import RootGirgitton from './pages/girgitton/Root.jsx'
import Menu from './pages/girgitton/Menu.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route path='/' element={<Login />}/>
            <Route path='girgitton' element={<RootGirgitton />} />
             <Route path='/client/:id' element={<Menu />} />
            <Route path='/oshpaz' element={<Oshpaz />}/> 
        </Route>
      </Routes>
     </BrowserRouter>
    </Provider>
  </StrictMode>,
)
