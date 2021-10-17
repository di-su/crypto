export async function getBtcPrice() {
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

export async function getAllCoins() {
  try {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}