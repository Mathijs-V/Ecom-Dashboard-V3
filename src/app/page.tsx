import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the Page</h1>
            <Link href="/graph">
                <button type="button">go to first graph</button>
            </Link>
        </div>
    )
}