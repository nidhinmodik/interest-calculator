import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,setRate]=useState(0);

  const [interest,setInterest]=useState(0);

  console.log(amount,year,rate);

  const calculate=(e)=>{
    const output =amount*year*rate/100
    console.log(output);
    setInterest(output);
  }

  const clear=(e)=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setInterest(0)
  }




  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1 style={{textDecoration:'underline'}}>Simple Interest Calculator</h1>
          <p>Calculate your simple interest with us ❤️</p>
          <div className="total">
            <h2>&#8377; {interest}</h2>
            <p>Your Total Interest</p>
          </div>

          <div className="form">
            <form>
              <div className="input">
              <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="outlined" />
              <br />
              <TextField id="outlined-basic" value={year||""}  onChange={(e)=>setYear(e.target.value)} label="Year" variant="outlined" />
              <br />
              <TextField id="outlined-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)} label="Rate" variant="outlined" />
              <br />
              </div>
              <div className="buttons">
                <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
                <Button variant="outlined" onClick={e=>clear(e)}>Reset</Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
