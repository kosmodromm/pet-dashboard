import {useState} from "react";

export default function Crypto() {
    const [cryptocurrency, setCryptocurrency] = useState('BTC');

    const currencyBasket = {
        BTC: 'Bitcoin',
        ETH: 'Ether',
    }


    return (
        <div className='crypto-body'>
            <div className='crypto-wrapper'>
                <div className='crypto-card btc'>BTC</div>
                <div className='crypto-card eth'>ETH</div>
                <div className='crypto-card uni'>UNI</div>
                <div className='crypto-card xrp'>XRP</div>
                <div className='crypto-card eos'>EOS</div>
                <div className='crypto-card matic'>MATIC</div>
            </div>
        </div>
    )
}