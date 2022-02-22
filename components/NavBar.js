import { Navigation } from '@shopify/polaris';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { HomeMajor,AppsMajor } from '@shopify/polaris-icons';

const NavBar = () => {
  const router = useRouter();

    return (
      <div className='navbar'>
        <Navigation location="/index">
        <Navigation.Section
          items={[
            {
              onClick:() =>{
                router.push('/');
              },
              label: 'Home',
              icon: HomeMajor,
              selected: false
            },
            {
              onClick:() =>{
                router.push('/diagnostic');
              },
              label: 'My diagnostic',
              icon: AppsMajor,
            }
          ]}
        />
      </Navigation>
    </div>
    )
  }

export default NavBar