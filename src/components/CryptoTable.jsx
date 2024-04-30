import XaiIcon from '../assets/xai.png'
import computedTokenImage from '../features/useComputedTokenImage';


const transactionsDataMOCK = [
    {
        Block: {
            Number: "206410388",
            Time: "2024-04-30T14:45:24Z"
        },
        Trade: {
            Buy: {
                Amount: "1.999977080000000000",
                Buyer: "0x37cc880aa9d66744f493adc2cf31621ea988b080",
                Currency: {
                    Name: "Xai",
                    SmartContract: "0x4cb9a7ae498cedcbb5eae9f25736ae7d428c9d66",
                    Symbol: "XAI"
                },
                Price: 0.6553180099443939,
                Seller: "0x1b81d678ffb9c0263b24a97847620c99d213eb14"
            },
            Sell: {
                Amount: "1.310621",
                Buyer: "0x1b81d678ffb9c0263b24a97847620c99d213eb14",
                Currency: {
                    Name: "Tether USD",
                    SmartContract: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
                    Symbol: "USDT"
                },
                Price: 1.5259766782311592,
                Seller: "0x37cc880aa9d66744f493adc2cf31621ea988b080"
            }
        },
        Transaction: {
            From: "0xcb39361f0eea3f2f1b9760ed76ecd0a37209d028",
            Hash: "0x744f0cdcf2ebb936fc98552ac03ba089a5fe684dbcd252f911e68290ea855294",
            To: "0x1a8f43e01b78979eb4ef7febec60f32c9a72f58e"
        }
    }
]


console.log('transactionsDataMOCK', transactionsDataMOCK)


const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

function CryptoTable({ transactionsData }) {





    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Block</th>
                        <th>Buy</th>
                        <th>Sell</th>
                        <th>Transaction</th>
                        <th>Time</th>

                    </tr>
                </thead>
                <tbody>
                    {transactionsDataMOCK?.map((el, i) => (
                        <tr key={i}>
                            <td>{el.Block.Number}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={XaiIcon} alt="Buy token" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{el.Trade.Buy.Currency.Name}</div>
                                        <div className="font-bold">Amount: {parseFloat(el.Trade.Buy.Amount).toFixed(5)}</div>
                                        <div className="text-sm opacity-50">Price: {parseFloat(el.Trade.Buy.Price).toFixed(3)}$</div>
                                        <a href={`https://arbiscan.io/address/${el.Trade.Buy.Buyer}`}>
                                            <span className="badge badge-ghost badge-sm">{el.Trade.Buy.Buyer}</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={computedTokenImage(el.Trade.Sell.Currency.Symbol)} alt="Sell token" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{el.Trade.Sell.Currency.Name}</div>
                                        <div className="font-bold">Amount: {parseFloat(el.Trade.Sell.Amount).toFixed(5)}</div>
                                        <div className="text-sm opacity-50">Price: {parseFloat(el.Trade.Sell.Price).toFixed(3)}$</div>
                                        <a href={`https://arbiscan.io/address/${el.Trade.Sell.Buyer}`}>
                                            <span className="badge badge-ghost badge-sm">{el.Trade.Sell.Buyer}</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                From: <a href={`https://arbiscan.io/address/${el.Transaction.From}`}><span className="badge badge-ghost badge-sm">{el.Transaction.From}</span></a><br />
                                To: <a href={`https://arbiscan.io/address/${el.Transaction.To}`}><span className="badge badge-ghost badge-sm">{el.Transaction.To}</span></a>
                            </td>
                            <td>
                                {new Date(el.Block.Time).toLocaleDateString('us-US', options)}
                            </td>


                        </tr>
                    ))}


                </tbody>


            </table>
        </div>
    );
}

export default CryptoTable;