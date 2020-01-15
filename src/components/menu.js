import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Menu = () =>  (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px'
    }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><AniLink fade duration={.25} to='/'>Home</AniLink></li>
            <li><AniLink fade duration={.25} to='/about'>About</AniLink></li>
            <li><AniLink fade duration={.25} to='/services'>Services</AniLink></li>
            <li><AniLink fade duration={.25} to='/blog'>Blog</AniLink></li>
        </ul>
    </div>
)

export default Menu;