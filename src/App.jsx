import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';

function App() {

  return (
    <>
  <div className='w-full h-screen dark:bg-slate-900'>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={ <Card title={"Web Development"} description={"Web development is the comprehensive process of building, creating, and maintaining websites and web applications that run over the internet. It encompasses everything from designing a single, static page of plain text to developing complex, interactive electronic businesses and social network services.The field is broadly categorized into two primary specializations: Frontend and Backend development.Frontend Development (Client-Side): Focuses on everything users experience directly. Using core technologies like HTML for structure, CSS for layout and design, and JavaScript for programmatic interactivity, frontend developers ensure websites are visually engaging, accessible, and responsive across all screen sizes.Backend Development (Server-Side): Operates behind the scenes to power the frontend interface. Backend developers manage servers, design databases, and write application logic using languages such as Python, Java, PHP, or Node.js. They ensure that data is processed securely, accurately, and efficiently.Professionals proficient in both fields are termed Full-Stack developers. Ultimately, web development serves as the foundational backbone of the modern digital economy, driving how we consume information and interact daily. It enables seamless global communication, powers digital storefronts, and continuously evolves alongside groundbreaking advancements in cloud computing, cybersecurity, and artificial intelligence."}/>}/>
      <Route path='/skills' element={<Card title={"Skills"} description={"I am a highly capable Full-Stack Developer. I have the core foundation (HTML/CSS/JS), a cutting-edge frontend ecosystem (React/Next.js) for building fast, SEO-friendly user interfaces, and a powerful backend framework (Laravel) to handle databases, authentication, and APIs. I can build advanced, decoupled, modern web applications from scratch."}/>}/>
      <Route path='/contact' element={<Card title={"Contact"} description={"Contact with SaraL: sksara706@gmail.com"}/>}/>
      

   </Routes>

   <Footer/>
  </div>
  
    </>
  )
}

export default App
