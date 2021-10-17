
import { getBtcPrice, getAllCoins } from "../api/coin-gecko";
import { useState, useEffect } from "react";
import Coin from "./coin";
import SearchBar from "./search-bar";

export default function Home() {
  const [state, setState] = useState({
    btc: {},
    allCoins: {},
  });

  useEffect(() => {
    getBtcPrice().then((result) => {
      setState({ ...state, btc: result });
    });
    getAllCoins().then((result) => {
      setState({ ...state, allCoins: result });
    });
  }, []);

  // console.log(state)

  return (
    <>
      <SearchBar allCoins={state.allCoins}/>
      <div className="pt-4">
        {/* <Coin coinData={state.btc}/> */}
      </div>
    </>
  );
}
