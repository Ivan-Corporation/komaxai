import btc from "../assets/tokens/btc.png";
import wbtc from "../assets/tokens/WBTC.png";
import binance from "../assets/tokens/wbnb.webp";
import beth from "../assets/tokens/BETH.png";
import VLX from "../assets/tokens/VLX.png";
import GHST from "../assets/tokens/GHST.png";
import eth from "../assets/tokens/ETH.png";
import arb from "../assets/tokens/arb.png";
import rdnt from "../assets/tokens/rdnt.png";
import usdt from "../assets/tokens/usdt.png";
import usdc from "../assets/tokens/usdc.png";
import matic from "../assets/tokens/matic.png";
import xrp from "../assets/tokens/XRP.png";
import ada from "../assets/tokens/ADA.png";
import cake from "../assets/tokens/cake.png";
import avax from "../assets/tokens/AVAX.png";
import sol from "../assets/tokens/SOL.png";
import inj from "../assets/tokens/inj.png";
import DOGE from "../assets/tokens/DOGE.png";
import DAI from "../assets/tokens/DAI.png";
import dot from "../assets/tokens/DOT.webp";
import link from "../assets/tokens/LINK.png";
import ldo from "../assets/tokens/LDO.png";

export default function computedTokenImage(token) {
  if (token.symbol === "WBTC" || token === "WBTC") {
    return wbtc;
  }
  if (
    token.symbol === "BTC" ||
    token === "BTC" ||
    token.symbol === "BTCB" ||
    token === "BTCB"
  ) {
    return btc;
  }
  if (token.symbol === "ETH" || token === "ETH") {
    return eth;
  }
  if (token.symbol === "WETH" || token === "WETH") {
    return eth;
  }
  if (token.symbol === "ARB" || token === "ARB") {
    return arb;
  }
  if (token.symbol === "USDT" || token === "USDT") {
    return usdt;
  }
  if (token.symbol === "USDC" || token === "USDC") {
    return usdc;
  }
  if (token.symbol === "RDNT" || token === "RDNT") {
    return rdnt;
  }
  if (
    token.symbol === "WBNB" ||
    token === "WBNB" ||
    token.symbol === "BNB" ||
    token === "BNB"
  ) {
    return binance;
  }
  if (token.symbol === "BETH" || token === "BETH") {
    return beth;
  }
  if (token.symbol === "DOGE" || token === "DOGE") {
    return DOGE;
  }
  if (token.symbol === "VLX" || token === "VLX") {
    return VLX;
  }
  if (token.symbol === "GHST" || token === "GHST") {
    return GHST;
  }
  if (token.symbol === "MATIC" || token === "MATIC") {
    return matic;
  }
  if (token.symbol === "WMATIC" || token === "WMATIC") {
    return matic;
  }

  if (token.symbol === "XRP" || token === "XRP") {
    return xrp;
  }
  if (token.symbol === "ADA" || token === "ADA") {
    return ada;
  }
  if (
    token.symbol === "CAKE" ||
    token === "CAKE" ||
    token.symbol === "Cake" ||
    token === "Cake"
  ) {
    return cake;
  }
  if (token.symbol === "AVAX" || token === "AVAX") {
    return avax;
  }
  if (token.symbol === "SOL" || token === "SOL") {
    return sol;
  }
  if (token.symbol === "INJ" || token === "INJ") {
    return inj;
  }
  if (token.symbol === "DOT" || token === "DOT") {
    return dot;
  }
  if (token.symbol === "LINK" || token === "LINK") {
    return link;
  }
  if (token.symbol === "LDO" || token === "LDO") {
    return ldo;
  }
  if (token.symbol === "USDC.e" || token === "USDC.e") {
    return usdc;
  }
  if (token.symbol === "DAI" || token === "DAI") {
    return DAI;
  }
}
