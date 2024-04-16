import React from 'react';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
    return (
        <>
            <Header />
            
            <div>
                <h1>Welcome to the Page</h1>
                {/* Use Link component properly */}
                <Link href="/graph" passHref>
                    <button type="button">Go to First Graph</button>
                </Link>
            </div>
            <Footer />
        </>
    );
}
