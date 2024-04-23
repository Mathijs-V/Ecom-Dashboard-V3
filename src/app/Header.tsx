import React, { useState } from 'react';
import Link from 'next/link';
//import Login from './Login';
import './Header.css'; // Import CSS file for styling

function Header() {
    return (
        <header className="header">
            <h1>E-Commerce-Dashboard</h1>
            <Link href="./sales" passHref>
                    <button type="button">sales</button>
            </Link>
            <br></br>
            {/* Add any other header content here */}
            <Link href="./graph" passHref>
                    <button type="button">Graph</button>
            </Link>
        </header>
    );
}

export default Header;

export const config = { runtime: 'client' };