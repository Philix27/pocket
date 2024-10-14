import axios from 'axios';

// const url = 'https://api.celoscan.io/api';
const url = `https://api.celoscan.io/api?module=account&action=txlist&address=0x20F50b8832f87104853df3FdDA47Dd464f885a49&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.NEXT_PUBLIC_CELO_KEY}`;

type Response = {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: string;
  functionName: string;
};

export async function getTransactions(props: { address: string; offset?: number }) {
  const res = await axios.get(
    url
    //   .concat('?module=account')
    //   .concat('&action=txlist')
    //   .concat('&address=' + props.address)
    //   .concat('&startblock=0')
    //   .concat('&endblock=99999999')
    //   .concat('&page=1')
    //   .concat('&offset=10')
    //   .concat('&offset=' + props.offset?.toString() || '10')
    //   .concat('&sort=asc')
    //   .concat('&apikey=' + process.env.NEXT_PUBLIC_CELO_KEY)
  );
  console.log('in function 45', res.data);
  return res.data.result as Response[];
}
