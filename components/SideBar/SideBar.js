import { Navigation } from '@shopify/polaris';
import React, { useState } from 'react'
import { HomeMajor,AppsMajor } from '@shopify/polaris-icons';
import Item from './Item';
import {Links} from './data';
import {ArrowSvg} from '../Svgs/SvgFiles';
const SideBar = () => {
 
  const [open, setOpen] = useState(false);



    return (
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
    )
  }

export default SideBar