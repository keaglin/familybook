import React from 'react'
import Header from './components' 
import Footer from './components'

const MainLayout = ({children}) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

export default MainLayout