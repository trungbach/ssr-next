import React from 'react';
import {useRouter} from 'next/router'
import request from '@/utils/request';
const Nav = () => {
    const router = useRouter()
    return (
        <div>
           {Object.entries(request).map(([key, { title, url }]) => (
               <h2 type="button" onClick={() => router.push(`/?genre=${key}`, undefined, { shallow: true })} key={key}>{title}</h2>
           ))} 
        </div>
    );
}

export default Nav;
