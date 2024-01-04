import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'App'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import 'shared/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
