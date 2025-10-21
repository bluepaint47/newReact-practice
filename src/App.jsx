import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

function App() {
 const users =[
  {img:"https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
     tag:"Satisfied",
     intro:''
    },
  {
    img:"https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    tag:"Underbanked",
    intro:''},
  {
    img:"https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    tag:"Underserved",
    intro:''}
 ]

  return (
    <>
     
  <Section1 users={users}/>
  <Section2></Section2>

    </>
  )
}

export default App
