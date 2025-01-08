import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Input from "./components/Input";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convertAmount = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center ">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-6 backdrop-blur-sm bg-white/30">
          <div className="text-white/80 font-extrabold text-2xl pb-4 text-center">
            Currency Converter
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertAmount();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                selectCurrency={from}
                amountDisable={false}
                currencyDisable={false}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mb-1">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onAmountChange={(amount) => {
                  setConvertedAmount(amount);
                }}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable={false}
                currencyDisable={false}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 mt-4 rounded-lg"
              onClick={convertAmount}
            >
              Convert{"  "}
              <span className="backdrop-blur-sm rounded px-2 bg-white/30">
                {from.toUpperCase()}
              </span>{" "}
              to{"  "}
              <span className="backdrop-blur-sm rounded px-2 bg-white/30">
                {to.toUpperCase()}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
