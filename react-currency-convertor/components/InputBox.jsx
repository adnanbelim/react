import React from "react";
import './InputBox.css';
function InputBox({
  amount, 
  selectCurrency,
  convertedAmount,
  onAmountChange,
  currencyOption = [],
  label,
  amountDisable,
  onCurrencyChange,
}){
  let size = currencyOption.length;
  let options = [];
  for(let i = 0; i<size; i++){
   options.push(<option key={i} value={currencyOption[i]}>
    {currencyOption[i]}
   </option>) 
  }
  return(
    <>
      <div className="inputBox">
       <div className="from-amt">
        <label className="from" htmlFor="">{label}</label>
        <input className="amt" disabled={amountDisable} type="number" di value={amount} onChange={(e)=>{
          onAmountChange && onAmountChange(Number(e.target.value))}}/>
       </div>
       <div className="currency-type">
         <label className="currency" htmlFor="">Currency Type</label>
         <select className="type" value={selectCurrency} onChange={(e)=>{
          onCurrencyChange && onCurrencyChange(e.target.value);
         }}>
           {/* 'we can use this syntex with using for loop' {
            currencyOption.map((e,i)=>(
                 <option key={i} value={e}>{e}</option> 
            ))
           } */}
          {options}
  
         </select>
       </div>
     
     </div>
    </>
  )
}

export default InputBox;