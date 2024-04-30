const INFURA_ID = "cf19d7e1526c467abda09aa3f47e4bbb";
const provider = new ethers.providers.JsonRpcProvider(
  `https://arbitrum-mainnet.infura.io/v3/${INFURA_ID}`
);

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",

  "event Transfer(address indexed from, address indexed to, uint amount)",
];

const address = "0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66"; // XAI Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

async function callXAI() {
  const block = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter(
    "Transfer",
    block - 1000,
    block
  );
  console.log(transferEvents);
}

useEffect(() => {
  callXAI();
}, []);
