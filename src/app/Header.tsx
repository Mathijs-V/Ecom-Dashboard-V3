import React from 'react';
import Link from 'next/link';
import './Header.css'; // Import CSS file for styling

function Header() {
    return (
        <header className="header">
            <h1>Header</h1>
            {/* Add any other header content here */}
            <Link href="./graph" passHref>
                    <button type="button">Go to First Graph</button>
            </Link>
        </header>
    );
}

export default Header;
