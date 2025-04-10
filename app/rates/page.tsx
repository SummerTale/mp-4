import CurrencyTable from '@/components/CurrencyTable';
import { getRates } from '@/lib/getRates';
export default async function RatesPage() {
    try{
      const data = await getRates();
  
      return(
        <main>
                <h1 className="heading">Exchange Rates</h1>
            <CurrencyTable base={data.base} date={data.date} rates={data.rates} />
        </main>
      );
    }

    catch(error: any){
      return (
        <main>        
          <h1 className="heading">Exchange Rates</h1>
          <p className="description">{error.message}</p>
        </main>
      );
    }
}