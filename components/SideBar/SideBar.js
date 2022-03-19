import React, { useEffect, useState } from 'react'
import Item from './Item';
import {Links} from './data';
import {ArrowSvg} from '../Svgs/SvgFiles';
import { SideStyles } from './styles';


const SideBar = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <SideStyles>
      <div className={open ? 'sidebar-open' : 'sidebar'}>
          <div 
            onClick={()=> setOpen(!open)}
            className={open ? 'open-close arrow-close' : 'open-close arrow-open'}
            >
            <ArrowSvg/>
          </div>
          {/* links */}
          <div className="link-container">
            {Links.map((data, index) => (<Item key={index} data={data} open={open}/>)  )}
          </div>
      </div>
    </SideStyles>    
  )
  }

export default SideBar