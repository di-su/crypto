import { useState, useEffect } from "react";
import Coin from "./coin";
import SearchBar from "./search-bar";

async function getBtcPrice() {
  try {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

export default function Home() {
  const [state, setState] = useState({
    btc: "",
  });

  useEffect(() => {
    getBtcPrice().then((result) => {
      setState({ ...state, btc: result });
    });
  }, []);

  return (
    <>
      <SearchBar />
      <div className="pt-4">
        <Coin coinData={state.btc}/>
      </div>
    </>
  );
}
