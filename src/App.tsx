import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  function VAT() {
    if (amount > 0) {
      return amount * 0.255;
    }
    return 0;
  }

  function calculate() {
    const vat = VAT();
    const total = amount + vat;
    setResult(`VAT (€): ${vat.toFixed(2)}, Total (€): ${total.toFixed(2)}`);
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Vat Calculator</h1>
          <p>Amount (€):</p>
          <input
            type="number"
            placeholder="Enter amount"
            inputMode="numeric"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button type="button" className="counter" onClick={calculate}>
          Calculate VAT
        </button>
        {result && <p>{result}</p>}
      </section>

      <div className="ticks"></div>
      <section id="next-steps"></section>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
