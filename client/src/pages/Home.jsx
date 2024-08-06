import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Skill from '../components/Skill'
import Site from '../components/Site'
import Comment from '../components/Comment'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <main id='main'>
            <Intro />
            <About />
            <Skill />
            <Site />
            <Comment />
            <Contact />
        </main>
    )
}

export default Home
