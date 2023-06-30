import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout/Layout.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import ListPersonajes from './components/ListPersonajes/ListPersonajes.jsx'
import ListUbicaciones from './components/ListUbicaciones/ListUbicaciones.jsx'
import ListEpisodios from './components/ListEpisodios/ListEpisodios.jsx'
import PersonajeDetail from './components/PersonajeDetail/PersonajeDetail.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<App></App>}></Route>
          <Route path="/personajes" element={<ListPersonajes/>}></Route>
          <Route path="/personaje/:id" element={<PersonajeDetail/>}></Route>
          <Route path="/episodios" element={<ListEpisodios/>}></Route>
          <Route path="/ubicaciones" element={<ListUbicaciones/>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
    </React.StrictMode>
    )
