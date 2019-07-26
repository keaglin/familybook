import React from 'react'
import Header from './Header' 
import Footer from './Footer'

const MainLayout = ({children}) => {
console.log(children)
return (
  <section>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </section>
)
}
export default MainLayout