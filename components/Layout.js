import React from 'react'
import styledGobal from '../public/styled/global/styleGlobal';

const Layout = ({children}) => {
  return (
    
    <>
     {children}
      <style jsx global>
        {styledGobal}
      </style>
    </>
  )
}

export default Layout
