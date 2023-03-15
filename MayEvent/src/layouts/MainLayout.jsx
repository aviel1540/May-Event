import React from 'react'
import {AppHeader} from './AppHeader'
import {AppFooter} from './AppFooter'

export const MainLayout = (props) => {
  return (
    <div> 
        <AppHeader/>
        <main>{props.childern}</main>
        <AppFooter/>
    </div>
  )
}

