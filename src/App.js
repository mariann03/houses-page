import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { SWRConfig } from 'swr'
import fetchJson from './utils'
import { toast } from 'react-toastify'
import NavBar from './components/NavBar'
import Home from './pages/Home'
toast.configure()

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ArialMT, "Helvetica Neue", Arial, "Liberation Sans", FreeSans, sans-serif;
  }
  body {
      margin: 0;
    }
  }
`
function App() {
  return (
    <SWRConfig value={{ fetcher: fetchJson, revalidateOnFocus: false, errorRetryInterval: 1000 }}>
      <GlobalStyle />
      <NavBar />
      <Home />
    </SWRConfig>
  )
}

export default App
