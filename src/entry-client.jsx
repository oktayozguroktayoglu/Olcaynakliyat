import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const container = document.getElementById('root')
const app = <React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>

// Prerender edilmiş sayfalarda mevcut HTML'e bağlan; boş sayfada (404 / geliştirme) sıfırdan çiz
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
