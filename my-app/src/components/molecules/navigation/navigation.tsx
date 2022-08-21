import React from 'react';
import { Link } from '../../atoms/links/links'

const navItems = [
    { title: 'all', active: false },
    { title: 'documentary', active: true },
    { title: 'comedy', active: false },
    { title: 'Horror', active: false },
    { title: 'crime', active: false }
]

export const Navigation = () => {
    return (
        <nav className='m-navigation'>
            <ul className='m-navigation__block'>
                {navItems.map((item, id) => {
                    return <li key={id} className='m-navigation__item' >
                        <Link
                            className={`m-navigation__link ${item.active ? 'm-navigation__link--active' : ''}`}
                            title={item.title}
                            href='#'
                        >
                            {item.title}
                        </Link>
                    </li>
                })}
            </ul>
        </nav >
    )
} 
