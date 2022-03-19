import React from 'react'
import GlobalStyle from '../styles/GlobalStyle';
import SideBar from "../components/SideBar/SideBar";

const Layout = ({children}) => {
  
  return (
    
    <>
      <GlobalStyle/>
      <SideBar/>
      {children}    
    </>
  )
}

export default Layout
