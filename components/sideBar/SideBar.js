import { Navigation } from '@shopify/polaris';
import React, { useState } from 'react'
import { HomeMajor,AppsMajor } from '@shopify/polaris-icons';
import Item from './Item';
import {Links} from './data';
const SideBar = () => {
 

  const [open, setOpen] = useState(false);

    return (
      <div className={open ? 'sidebar-open' : 'sidebar'}>
        <svg 
          onClick={()=> setOpen(!open)}
          class={open ? 'open-close arrow-close' : 'open-close arrow-open'}
          viewBox="0 0 16 16" 
        >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C3.582 16 -3.13148e-07 12.418 -6.99382e-07 8C-1.08562e-06 3.582 3.582 1.08562e-06 8 6.99382e-07C12.418 3.13148e-07 16 3.582 16 8C16 12.418 12.418 16 8 16ZM9.70711 11.7071C10.0976 11.3166 10.0976 10.6834 9.70711 10.2929L7.41421 8L9.70711 5.70711C10.0976 5.31658 10.0976 4.68342 9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289L5.29289 7.29289C4.90237 7.68342 4.90237 8.31658 5.29289 8.70711L8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071Z" fill="#5C5F62"/>
        </svg>


          {/* links */}
          <div class="link-container">
            {Links.map((data) => (<Item data={data} open={open}/>)  )}
          </div>
      </div>    
    )
  }

export default SideBar