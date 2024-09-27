import { useState } from 'react'
import React from 'react'
import './App.css'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import {InputBox} from '../components/index'

function App() {
  let [amount , setAmount] = useState(0);
  let [convertedAmount , setConvertedAmount] = useState(0);
  const [from , setFrom] = useState('usd');
  const [to , setTo] = useState('inr');
  const data = useCurrencyInfo('usd');
  let options = Object.keys(data);

  function convertCurrency(currency){
      let x = amount * data[currency];
      setConvertedAmount(x);
  }

  function swapCurrency(){
    let swapAmount = convertedAmount;
    setConvertedAmount(amount) ;
    setAmount(swapAmount);

    let swapCurrency = from;
    setFrom(to);
    setTo(swapCurrency);

  }

  return (
    <>
    <div className="image-bg"></div>
      <div className="container">
        <div className="input-Container">
          <InputBox amount={amount} label={'From'} amountDisable={false} onAmountChange={(e)=>setAmount(e)} selectCurrency={from} currencyOption={options} onCurrencyChange={(e)=>setFrom(e)}/>
          <button className="swap-currency" onClick={swapCurrency}>Swap</button>
          <InputBox amount={convertedAmount} label={'To'} amountDisable={true} selectCurrency={to} currencyOption={options} onCurrencyChange={(e)=>setTo(e)} convertCurrency={convertCurrency}/>
        </div>
        <button className='convert-btn' onClick={(e)=>convertCurrency(to)}>Convert {from} TO {to}</button>
      </div>
    </>
  )
}
  
export default App


