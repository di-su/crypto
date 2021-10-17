import { useForm } from "react-hook-form";

interface AllCoinsInterface {
  allCoins: Object;
}

interface CoinInterface {
  id: String;
  symbol: String;
  name: String;
}

function searchAllCoins(searchValue: any, allCoins: any) {
  console.log("searchValue", searchValue);
  // console.log("allCoins", allCoins);
  // console.log("typeof", typeof allCoins);

  let searchResult = allCoins.filter(
    (coins: CoinInterface) =>
      coins.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  console.log(searchResult);
}

export default function SearchBar(allCoins: AllCoinsInterface) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onChange = (data: any) =>
    searchAllCoins(data.searchValue, allCoins.allCoins);

  // console.log("allCoins", allCoins);
  return (
    <form onChange={handleSubmit(onChange)}>
      <input
        {...register("searchValue")}
        className="w-full text-center rounded-md border-gray-500 border-2 p-1"
        type="text"
        placeholder="search coins"
      />
    </form>
  );
}
