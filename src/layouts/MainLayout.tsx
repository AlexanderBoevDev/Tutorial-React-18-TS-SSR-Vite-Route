import React from 'react'
import { HeaderComponent } from '../components/HeaderComponent'
import { MainComponent } from '../components/MainComponent'
import { FooterComponent } from '../components/FooterComponent'

import '../scss/app.scss'

export const MainLayout = () => {
  return (
    <div className="page page--wrapper">
      <HeaderComponent />
      <MainComponent/>
      <FooterComponent />
    </div>
  )
}
