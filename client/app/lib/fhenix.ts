import { FhenixClient } from 'fhenixjs';
import { JsonRpcProvider } from 'ethers';

// initialize your web3 provider
const provider = new JsonRpcProvider('https://api.helium.fhenix.zone');

// initialize Fhenix Client
const client = new FhenixClient({ provider });

// to encrypt data for a Fhenix contract
let encrypted = await client.encrypt(5, EncryptionTypes.uint8);

// ...
// contract logic goes here
// ...

// to unseal data returned from a Fhenix contract
const cleartext = client.unseal(contractAddress, sealed);
