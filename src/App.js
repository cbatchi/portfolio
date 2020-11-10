import React from 'react'
import { Header, About, Skill, Projet, Footer } from './store'

const App = () => {

  return (
    <main className="app">
      <Header />
      <About />
      <Skill />
      <Projet />
      <Footer/>
    </main>
  )
}

export default App