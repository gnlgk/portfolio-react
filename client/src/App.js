import React, { useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

import Lenisani from './utils/Lenisani';
import headercolor from './utils/headercolor';

// import Intro from './components/Intro'
// import About from './components/About'
// import Skill from './components/Skill'
// import Site from './components/Site'
// import Comment from './components/Comment'
// import Contact from './components/Contact'
import Home from './pages/Home';
// import Textsplit from './utils/Textsplit';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    Lenisani();
    headercolor();
    // Textsplit();
  }, []); // 빈 의존성 배열

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Intro />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/site' element={<Site />} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
