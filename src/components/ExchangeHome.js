import React, { useState } from 'react'
import './styles/ExchangeHome.css'

export default function ExchangeHome() {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(null);

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleConvert = async () => {
        let rate = null;
        if (fromCurrency === 'CMD' && toCurrency === 'CMD') {
            rate = 1;
        } else if (fromCurrency === 'CMD') {
            rate = 1 * 69;
        } else if (toCurrency === 'CMD') {
            rate = 69;
        } else {
            const response = await fetch(
                `https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency}&to=${toCurrency}&q=${amount}`,
                {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
                        'x-rapidapi-key': '2aa905393emsh109f3578592ff85p1cfa38jsn6ec5fd7cadcf', // Replace with your API key
                    },
                }
            );
            const data = await response.json();
            rate = data;
        }
        setExchangeRate(rate);
    };

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };



    return (
        <>
            <div className="formHomepage">
                {/* <h3>Amount</h3> */}
                <input className="amount" type="number" value={amount} onChange={handleAmountChange} />
                <select className="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange} style={color: 'white'}}>
                    <option value="INR">Indian Rupee (INR)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                    <option value="RUB">Russian Ruble (RUB)</option>
                    <option value="USD">American Dollar (USD)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="SGD">Singapore Dollar (SGD)</option>
                    <option value="AUD">Australian Dollar (AUD)</option>
                    <option value="HKD">Hong Kong Dollar (HKD)</option>
                    <option value="NZD">New Zealand Dollar (NZD)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="EUR">Europian Euro (EUR)</option>
                    <option value="MYR">Malaysian Ringgit (MYR)</option>
                    <option value="CNH">Chinese Yuan (CNH)</option>
                    <option value="MXN">Mexican Peso (MXN)</option>
                    <option value="IDR">Indonesian Rupiah (IDR)</option>
                    <option value="TWD">Taiwan dollar (TWD)</option>
                    <option value="THB">Thai Baht (THB)</option>
                    <option value="VND">Vietnamese dong (VND)</option>
                    <option value="CMD">Mayank Uchariya</option>
                </select>

                <select className="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="INR">Indian Rupee (INR)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                    <option value="RUB">Russian Ruble (RUB)</option>
                    <option value="USD">American Dollar (USD)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="SGD">Singapore Dollar (SGD)</option>
                    <option value="AUD">Australian Dollar (AUD)</option>
                    <option value="HKD">Hong Kong Dollar (HKD)</option>
                    <option value="NZD">New Zealand Dollar (NZD)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="EUR">Europian Euro (EUR)</option>
                    <option value="MYR">Malaysian Ringgit (MYR)</option>
                    <option value="CNH">Chinese Yuan (CNH)</option>
                    <option value="MXN">Mexican Peso (MXN)</option>
                    <option value="IDR">Indonesian Rupiah (IDR)</option>
                    <option value="TWD">Taiwan dollar (TWD)</option>
                    <option value="THB">Thai Baht (THB)</option>
                    <option value="VND">Vietnamese dong (VND)</option>
                </select>
                <div>
                    <button className="convertBtn" onClick={handleConvert}>Convert</button>
                    <br />
                    <button className="swapBtn" onClick={handleSwapCurrencies}>Swap</button>
                    <p className='ExchangeResult' >Exchange rate: {exchangeRate * amount}</p>
                </div>
            </div>
        </>
    )
}
