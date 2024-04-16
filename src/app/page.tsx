import React from 'react';
import Link from 'next/link';
import Footer from './Footer';

export default function Home() {
    return (
        <>
        <div>
            <h1>Welcome to the Page</h1>
            <Link href="./graph" legacyBehavior>
            <button type="button">Go to First Graph</button>
            </Link>
        </div>
        <Footer></Footer>
        </>
    );
}