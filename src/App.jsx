import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-blue-400 flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center space-x-8 mb-12">
          <a href="https://vite.dev" target="_blank">
            <img
              src={viteLogo}
              className="m-24 h-24 animate-ping"
              alt="Vite logo"
              style={{ animationDuration: "10s" }}
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="m-24 h-24 animate-ping"
              alt="React logo"
              style={{ animationDuration: "10s" }}
            />
          </a>
        </div>
        <h1 className="text-white text-8xl font-bold mb-16">Vite + React</h1>
        <div className="text-sm space-y-6 mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-900 text-white py-2 px-6 rounded-lg text-lg"
          >
            count is {count}
          </button>
          <p className="text-white">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-white">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;