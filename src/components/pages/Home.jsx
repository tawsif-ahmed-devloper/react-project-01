import React from 'react'
import Menu from '../menu/Menu'
import Bann from '../bann/Bann'
import Work from '../work/Work'
import Project from '../project/Project'
import Feature from '../features/Feature'
import Testimonials from '../testimonials/Testimonials'
import Question from '../questions/Question'
import Contactfrom from '../contactfrom/Contactfrom'
import Ourblog from '../ourblog/Ourblog'

const Home = () => {
  return (
    <>
    <Bann/>
    <Work/>
    <Project/>
    <Feature/>
    <Testimonials/>
    <Question/>
    <Contactfrom/>
    <Ourblog/>
    </>
  )
}

export default Home