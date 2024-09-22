import { useState } from 'react'
import Header from './Header/Header'
import Section_1 from './Component/Section_1'
import Section_2 from './Component/Section_2'
import Section_3 from './Component/Section_3'
import Section_4 from './Component/Section_4'
import Section_5 from './Component/Section_5'
import Section_6 from './Component/Section_6'
import Section_7 from './Component/Section_7'
import Footer from './Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
      <Section_6/>
      <Section_7/>
      <Footer/>

      
    </>
  )
}

export default App
