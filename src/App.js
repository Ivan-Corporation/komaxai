import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import CryptoTable from "./components/CryptoTable";
import Widgets from "./components/Widgets";

function App() {
  const [transactionsData, setTransactionsData] = useState();

  // function callXAI() {
  //   let data = JSON.stringify({
  //     query:
  //       '{\n  EVM(dataset: combined, network: arbitrum) {\n    buyside: DEXTrades(\n      limit: {count: 1}\n      orderBy: {descending: Block_Time}\n      where: {Trade: {Buy: {Currency: {SmartContract: {is: "0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66"}}}}}\n    ) {\n      Block {\n        Number\n        Time\n      }\n      Transaction {\n        From\n        To\n        Hash\n      }\n      Trade {\n        Buy {\n          Amount\n          Buyer\n          Currency {\n            Name\n            Symbol\n            SmartContract\n          }\n          Seller\n          Price\n        }\n        Sell {\n          Amount\n          Buyer\n          Currency {\n            Name\n            SmartContract\n            Symbol\n          }\n          Seller\n          Price\n        }\n      }\n    }\n  }\n}\n',
  //     variables: "{}",
  //   });

  //   let config = {
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: "https://streaming.bitquery.io/graphql",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-API-KEY": "BQYh4R0Ulhdncc0BYrAg7yg9QB3iXL31",
  //       Authorization:
  //         "Bearer ory_at_Ovwyy-PhmuUwqTtPwPNeZV1VpiE1lM_FR0rCSaCqJ1A.Z_fxspz07YF2d7WCRJxvjPnmolvnp6sshGJVFKPTNJQ",
  //     },
  //     data: data,
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  // setTransactionsData(response.data?.data?.EVM?.buyside)
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // useEffect(() => {
  //   callXAI();
  // }, []);

  return (
    <div className="App">
      <div className="flex justify-between">
        <Widgets />
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <CryptoTable transactionsData={transactionsData} />
    </div>
  );
}

export default App;
