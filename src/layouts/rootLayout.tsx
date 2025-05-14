import React, { ReactNode } from 'react'
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        {children}
        <Footer/>
    </div>
  )
}

export default RootLayout