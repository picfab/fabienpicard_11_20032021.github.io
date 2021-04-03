import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import Appart from './views/Appart'
import ErrorPage from './views/404'
import Home from './views/Home'
import Apropos from './views/Apropos'
import Routes from './Routes'
import reportWebVitals from './reportWebVitals'
ReactDOM.render(
  <React.StrictMode>
    <Routes
      urls={{
        appart: <Appart />,
        error: <ErrorPage />,
        home: <Home />,
        apropos: <Apropos />
      }} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
