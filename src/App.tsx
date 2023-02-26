import React from 'react'
import './App.css'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Skills } from './Skills/Skills'
import { MyWorks } from './MyWorks/MyWorks'
import { Contacts } from './Contacts/Contacts'
import { Footer } from './Footer/Footer'
import { Navigation } from './Navigation/Navigation'
import Layout from './Layout/Layout'

function App() {
  return (
    <div className="App">
      {/* <Skills /> */}
      {/* <Navigation activeTitle="Skills" /> */}
      <Layout>
        {/* <Header /> */}
        <Main />
        <Skills />
        <MyWorks />
        <Contacts />
        <Footer />
      </Layout>
    </div>
  )
}

export default App
