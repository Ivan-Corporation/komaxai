import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import CryptoTable from "./components/CryptoTable";
import Widgets from "./components/Widgets";

function App() {
  const [transactionsData, setTransactionsData] = useState();
  const [numberOfHolders, setNumberOfHolders] = useState();

  function callXAI() {
    let data = JSON.stringify({
      query:
        '{\n  EVM(dataset: combined, network: arbitrum) {\n    buyside: DEXTrades(\n      limit: {count: 10}\n      orderBy: {descending: Block_Time}\n      where: {Trade: {Buy: {Currency: {SmartContract: {is: "0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66"}}}}}\n    ) {\n      Block {\n        Number\n        Time\n      }\n      Transaction {\n        From\n        To\n        Hash\n      }\n      Trade {\n        Buy {\n          Amount\n          Buyer\n          Currency {\n            Name\n            Symbol\n            SmartContract\n          }\n          Seller\n          Price\n        }\n        Sell {\n          Amount\n          Buyer\n          Currency {\n            Name\n            SmartContract\n            Symbol\n          }\n          Seller\n          Price\n        }\n      }\n    }\n  }\n}\n',
      variables: "{}",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://streaming.bitquery.io/graphql",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "BQYh4R0Ulhdncc0BYrAg7yg9QB3iXL31",
        Authorization:
          "Bearer ory_at_bXd9jfXpBM_14kM33SvStMP0h91EVKaHZ9KqdcLnYW4.yPhManOmmfckXQlWYldyNKN8ZeguyFoxWoTeU1_huEs",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setTransactionsData(response.data?.data?.EVM?.buyside);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function NumberOfHolders() {
  //   let data = JSON.stringify({
  //     query:
  //       '{\n  EVM(network: arbitrum, dataset: combined) {\n    BalanceUpdates(\n      where: {Currency: {SmartContract: {is: "0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66"}}}\n    ) {\n      No_Holders: count(distinct: BalanceUpdate_Address)\n    }\n  }\n}\n',
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
  //         "Bearer ory_at_bXd9jfXpBM_14kM33SvStMP0h91EVKaHZ9KqdcLnYW4.yPhManOmmfckXQlWYldyNKN8ZeguyFoxWoTeU1_huEs",
  //     },
  //     data: data,
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       setNumberOfHolders(response.data?.data?.EVM?.buyside);
  //       console.log("NUMBER OF HOLDERS", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  useEffect(() => {
    callXAI();
    // NumberOfHolders();
  }, []);

  console.log("numberOfHolders", numberOfHolders);

  return (
    <div className="App">
      <div className="flex justify-between mt-10 mb-24">
        <Widgets />
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Number of Holders</div>
            <div className="stat-value">
              {/* {numberOfHolders?.data?.EVM.BalanceUpdates[0].No_Holders} */}
              ~180000
            </div>
            <div className="stat-desc">holders</div>
          </div>
        </div>
      </div>
      <CryptoTable transactionsData={transactionsData} />
    </div>
  );
}

export default App;
