import { BrowserProvider, Contract } from 'ethers';
import { App3Abi } from '../abi';

export async function geAppContract(userAddress: string) {
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner(userAddress);

  return new Contract(App3Abi.p2pContractAddress, App3Abi.p2pAbi, signer);
}

export async function createCard(props: { userAddress: string; createdFor: string; amount: number }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.createCard!(props.createdFor, props.amount);
    await txn.wait();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed operation');
  }
}

export async function updateCard(props: { userAddress: string; id: number }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.updateCard!(props.id);
    await txn.wait();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed operation');
  }
}

export async function getAllCards(props: { userAddress: string }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.getAllCards!();
    // const res = await txn.wait();
    console.log('In getAllCards:', txn);
  } catch (error) {
    console.error('Error:', error);
    // throw new Error("Failed operation");
  }
}

export async function getCardsCreatedBy(props: { userAddress: string }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.getCardsCreatedBy!(props.userAddress);
    const proxy = txn[0];
    const data = {
      id: proxy[0],
      isCompleted: proxy[1],
      amount: proxy[2],
      createdAt: proxy[3],
      updatedAt: proxy[4],
      address: proxy[5],
      identifier: proxy[6],
    };

    console.log('In getCardsCreatedBy:', data);
    return data;
    // await txn.wait();
  } catch (error) {
    console.error('Error:', error);
    // throw new Error("Failed operation");
  }
}

export async function getCardsCreatedFor(props: { userAddress: string; identifier: string }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.getCardsCreatedFor!(props.identifier);
    const proxy = txn[0];
    //  const data = {
    //    id: proxy[0],
    //    isCompleted: proxy[1],
    //    amount: proxy[2],
    //    createdAt: proxy[3],
    //    updatedAt: proxy[4],
    //    address: proxy[5],
    //    identifier: proxy[6],
    //  };
    console.log('In getCardsCreatedFor:', proxy);
    // await txn.wait();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed operation');
  }
}
