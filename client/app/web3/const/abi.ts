export const AppContractAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_cUSDAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'player1',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'player2',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'stakeAmount',
        type: 'uint256',
      },
    ],
    name: 'GameCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'GameEnded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256',
      },
    ],
    name: 'GameStarted',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_stakeAmount',
        type: 'uint256',
      },
    ],
    name: 'joinGame',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_winner',
        type: 'address',
      },
    ],
    name: 'setWinner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'StakeWithdrawn',
    type: 'event',
  },
  {
    inputs: [],
    name: 'cUSD',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'gameBalances',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gameCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'games',
    outputs: [
      {
        internalType: 'address',
        name: 'player1',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'player2',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'stakeAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'gameStarted',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'gameEnded',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'gameId',
        type: 'uint256',
      },
    ],
    name: 'getGameDetails',
    outputs: [
      {
        internalType: 'address',
        name: 'player1',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'player2',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'stakeAmount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'winner',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'gameStarted',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'gameEnded',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
    ],
    name: 'getPlayerGames',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'playerGames',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'waitingPlayer',
    outputs: [
      {
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'stakeAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastGameId',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
