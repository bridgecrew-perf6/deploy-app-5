import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

const Item = ({data, open}) => {
  const { asPath } = useRouter();
  const {to, text, icon} = data;

  const ariaCurrent = to === asPath ? "page" : undefined;
  return (
    <Link  href={to} passHref> 
      <a aria-current={ariaCurrent} className={open ? 'link-open' : 'link-close'} >
        
        <div>{icon}</div>
        {open&&<p>{text}</p>}
      </a>
    </Link>
  )
}

export default Item