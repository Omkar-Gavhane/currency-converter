import React from "react";

const Input = (props) => {

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex ">
      <div className="w-1/2 ">
        <label className="text-black/40 mb-2 inline-block">{props.label}</label>
        <input
          className="outline-none w-full bg-transparent py-2.5"
          type="number"
          placeholder="Amount"
          value={props.amount}
          disabled={props.amountDisable}
          onChange={(e) =>
            props.onAmountChange && props.onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-3 py-1 bg-gray-100 cursor-pointer outline-none"
          value={props.selectCurrency}
          disabled={props.currencyDisable}
          onChange={(e) =>
            props.onCurrencyChange && props.onCurrencyChange(e.target.value)
          }
        >
          {props.currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Input;
