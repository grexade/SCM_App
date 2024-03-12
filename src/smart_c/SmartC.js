
import {Web3} from "web3";

// set a provider in the sepolia testnet using node rpc url
const web3 = new Web3("https://rpc.sepolia.org");

// interacting with the smart contract
const abi = [
    {
    outputs: [
        {
        internalType: "uint256",
        name: "randomNo",
        type: "uint256",
        },
    ],
    name: "generateRandomNumber",
    stateMutability: "nonpayable",
    type: "function",
    },
] as const;

const address = "0xA36432F7B12f160F685717c4Ab12EB883a682810";

// create a new contract object, providing the ABI and address
const contract = new web3.eth.Contract(abi, address);

// using contract.methods to get value
contract.methods
    .generateRandomNumber()
    .call()
    .then(console.log);

// fetching

import {Web3} from "web3"
  
// set a provider such as using infura
const web3 = new Web3("https://rpc.sepolia.org") 

// Get the balance of an Ethereum address
web3.eth.getBalance("0xF8561Dc64E577B0CF53dd3FC11329e80B1A8343e").then(console.log) // result: 1.000.000 eth

// Get the latest block number
 web3.eth.getBlockNumber().then(console.log) // result: BigInt(xxx)