type Props={ base: string; date:string; rates: Record<string, number>;}

export default function CurrencyTable({base, date, rates}: Props){
    return(
        <div>
            <p className="description">Base Currency : {base} | Date: {date}</p>
            <div className='table-wrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(rates).map(([CurrencyTable, rate])=>(
                            <tr key={CurrencyTable}>
                                <td>{CurrencyTable}</td>
                                <td>{rate.toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}