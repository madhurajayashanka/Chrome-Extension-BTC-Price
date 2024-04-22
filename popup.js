async function fetchBitcoinPrice() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await response.json();
    return data.bpi.USD.rate;
  }
  
  async function updatePrice() {
    const priceElement = document.getElementById('price');
    priceElement.textContent = 'Loading...';
    const price = await fetchBitcoinPrice();
    priceElement.textContent = `Current Price: ${price} USD`;
  }
  
  updatePrice();
  