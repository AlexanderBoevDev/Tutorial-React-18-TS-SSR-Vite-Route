import React from 'react'
import { HeaderComponent } from '../components/HeaderComponent'
import { MainComponent } from '../components/MainComponent'
import { FooterComponent } from '../components/FooterComponent'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'bootstrap/scss/bootstrap-grid.scss'
import '../scss/app.scss'
import 'primeicons/primeicons.css'

export const MainLayout = () => {
  return (
    <div className="page page--wrapper">
      <HeaderComponent />
      <MainComponent/>
      <FooterComponent />
    </div>
  )
}
