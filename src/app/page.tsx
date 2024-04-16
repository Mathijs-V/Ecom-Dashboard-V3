import React from 'react';
import Link from 'next/link';
import Footer from './Footer';
import graph from './graph/page';

export default function Home() {
    return (
        <>
        <div>
            <h1>Welcome to the Page</h1>
            <Link href="./graph/page">
                <button type="button">go to first graph</button>
            </Link>
        </div>
        <Footer></Footer>
        </>
    );
}