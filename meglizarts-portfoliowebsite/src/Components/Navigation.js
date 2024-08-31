import React from 'react';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Graphic Design',
        path: '/gd'
    },
    {
        title: 'Concept Art',
        path: '/ca'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Login',
        path: '/login'
    },
];

export default function Navigation() {
    return (
        <nav className='site-navigation'>
            <span>My Portfolio</span>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        {link.title}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
