import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
export { allRoutes, extraRoutes, getMeta, headHtml, SITE_URL } from './seo.js'

export function render(url) {
  return renderToString(<React.StrictMode><StaticRouter location={url}><App/></StaticRouter></React.StrictMode>)
}
