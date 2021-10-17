// interface CoinInterface {
//   coinData: Object
// }

export default function Coin() {
  // console.log("coinData", coinData)
  return (
    <div className="grid grid-cols-11">
      <p className="col-span-5">Coin name</p>
      <p className="col-span-5">$XXX</p>
      <button className="col-span-1">x</button>
    </div>
  );
}
