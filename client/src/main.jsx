import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { Theme } from './Theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider theme={Theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>,
)

