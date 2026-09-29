import { useState } from "react";
import "./App.css";
function App() {

  var [count, setCount] = useState(0)

  function random() {
    setCount(Math.floor(Math.random() * 100) + 1)
  }


  return (
    <div className="container">
      <div className="card">
        <h1>Random Number Generator</h1>

        {count === 0 ? (
          <p className="message">
            No number generated yet
          </p>
        ) : (
          <h2>{count}</h2>
        )}

        <button onClick={random}>
          Generate Random Number
        </button>
      </div>
    </div>
  )

}
export default App