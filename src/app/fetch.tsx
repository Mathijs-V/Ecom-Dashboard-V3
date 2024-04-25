import { NextResponse } from "next/server";

let token: string | null = null;
let tokenExpires = 0;

export const revalidate = 0;
export const dynamic = "force-dynamic";

const getToken = async () => {
    if (Date.now() < tokenExpires) {
        return token;
      }
    
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const clientID = process.env.BOL_CLIENT_ID;
    const clientSecret = process.env.BOL_CLIENT_SECRET;

    console.log(`Loaded Client ID: ${clientID}`);
    console.log(`Loaded Client Secret: ${clientSecret}`);

    const credentials = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');

    console.log(`Encoded Credentials: ${credentials}`);

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${credentials}`,
        'Accept': 'application/json'
    };

    try {

        const response = await fetch('https://login.bol.com/token', {
            method: 'POST',
            headers: headers,
            body: params
        });

        if (!response.ok) {

            const errorText = await response.text();  
            console.error('Error fetching BOL token:', errorText);
            return null;
        }

        const data = await response.json();
        token = data.access_token;
        tokenExpires = Date.now() + data.expires_in * 1000 - 60000;
        return token;
    } catch (error) {

        console.error('Error fetching BOL token:', error);
        return null;
    }
};

const getData = async () =>{

    const token = await getToken();

    console.log(`Loaded Token ID: ${token}`);


    if (!token) {
        return NextResponse.json({ error: 'Failed to authenticate' }, { status: 401 });
    }

    try {
        const response = await fetch(`https://api.bol.com/retailer/shipments/invoices/requests`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/vnd.retailer.v10+json;charset=UTF-8',
                'Accept': 'application/vnd.retailer.V10+json'
            }
        });

        if(!response.ok){
            throw new Error("Failed to fetch API data");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching sales data:', error);
        return NextResponse.json({ error: 'Failed to fetch sales data' }, { status: 500 });
    }
}

const Login = async () => {
    const apiData = await getData();
    return (
        <>
            <h2>Login page !!</h2>
        <div>
            {JSON.stringify(apiData)}
        </div>
        </>
    )
}

export default Login;