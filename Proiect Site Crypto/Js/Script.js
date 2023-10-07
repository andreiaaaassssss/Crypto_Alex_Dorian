var toggleMenu = document.getElementsByClassName('toggle-menu')[0];
var navbarPages = document.getElementsByClassName('navbar-pages')[0];

try{
    toggleMenu.addEventListener('click', () => 
    {
        navbarPages.classList.toggle('active');
    }
    );
    }catch(e){};
    
let btcToUsd_price;
let ethToUsd_price;
let dogeToUsd_price;
let xrpToUsd_price;

let btc = new WebSocket ('wss://stream.binance.com:443/ws/btcusdt@aggTrade');
btc.onmessage = (event) => {
btcToUsd_price = parseFloat(JSON.parse(event.data).p);

stock_price_coin = document.getElementById("btc");
if (stock_price_coin != null)
    stock_price_coin.innerText = btcToUsd_price + " USD";
};

let eth = new WebSocket ('wss://stream.binance.com:443/ws/ethusdt@aggTrade');
eth.onmessage = (event) => {
ethToUsd_price = parseFloat(JSON.parse(event.data).p);

stock_price_coin = document.getElementById("eth");
if (stock_price_coin != null)
    stock_price_coin.innerText = ethToUsd_price + " USD";
};

let doge = new WebSocket ('wss://stream.binance.com:443/ws/dogeusdt@aggTrade');
doge.onmessage = (event) => {
dogeToUsd_price = parseFloat(JSON.parse(event.data).p);

stock_price_coin = document.getElementById("doge");
if (stock_price_coin != null)
    stock_price_coin.innerText = dogeToUsd_price + " USD";
};

let xrp = new WebSocket ('wss://stream.binance.com:443/ws/xrpusdt@aggTrade');
xrp.onmessage = (event) => {
xrpToUsd_price = parseFloat(JSON.parse(event.data).p);

stock_price_coin = document.getElementById("xrp");
if (stock_price_coin != null)
    stock_price_coin.innerText = xrpToUsd_price + " USD";
};

function Converteste() {

var dictionar = {
    "RON" : 4.70,
    "EUR" : 0.95,
    "USD" : 1,
    "BTC" : btcToUsd_price,
    "ETH" : ethToUsd_price,
    "DOGE" : dogeToUsd_price,
    "XRP" : xrpToUsd_price
};

var numeCriptoMoneda = document.getElementById("valuta0").value; // ETH
var textIntrare = document.getElementById("text-intrare").value;
var numevaluta = document.getElementById("valuta1").value;
var monedaConvert;
monedaConvert = dictionar[numeCriptoMoneda] * textIntrare * dictionar[numevaluta] ;
document.getElementById("text-iesire").value = monedaConvert;

console.log(numeCriptoMoneda);
console.log(textIntrare);
console.log(numevaluta);
console.log(monedaConvert);
}