import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div>
            <h1>Welcome to the Page</h1>
            <Link href="/app/graph">
                <button type="button">Go to first graph Page</button>
            </Link>
        </div>
    );
};

export default Page;