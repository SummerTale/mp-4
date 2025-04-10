//fallback plan

import {NextResponse} from 'next/server';
export async function GET(){
    const res = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API_KEY}`);
    const data = await res.json();

    if(!data.success){
        return NextResponse.json({error: data.error ?.info || 'Failed to fetch rates'}, {status: 500});
    }
    return NextResponse.json({
        base: data.base,
        date: data.date,
        rates: data.rates
    });
}