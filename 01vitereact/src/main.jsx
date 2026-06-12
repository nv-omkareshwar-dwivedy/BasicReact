import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const aEle = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click to visit google'
)

const ele = (
  <a href="https://google.com">visit to google</a>
)

createRoot(document.getElementById('root')).render(
  //ele
  aEle
)
