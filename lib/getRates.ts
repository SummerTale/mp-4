type RatesResponse={
  base: string;
  date:string;
  rates: Record<string, number>;
}
export async function getRates() :Promise<RatesResponse> {
  try{
    const res = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API_KEY}`);
    if (!res.ok) {
        throw new Error(`Fixer API responded with status ${res.status}`);
    }
    const data = await res.json();
    if(!data.success){
      const message = data.error?.info || 'Unexpected Fixer API error';
      throw new Error(message);
    }
  
    return{
      base: data.base,
      date: data.date,
      rates: data.rates,
    };
  } 
  catch (err: unknown){
    if (err instanceof Error) {
      throw new Error(`Error fetching exchange rates: ${err.message}`);
    }
    throw new Error('An unknown error occurred while fetching exchange rates.');
  }
}
  