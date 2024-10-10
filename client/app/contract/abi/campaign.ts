export const campaignAddress = '0x8d1aE51Acef6c671b659f5aC3916e9b211560CD0';
export const campaignAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'campaignId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'toke',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'upperLimit',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lowerLimit',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isBuy',
        type: 'bool',
      },
    ],
    name: 'CampaignCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'campaignId',
        type: 'uint256',
      },
    ],
    name: 'CampaignDeactivated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'campaignId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'toke',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'upperLimit',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lowerLimit',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256',
      },
    ],
    name: 'CampaignUpdated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'campaigns',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
      {
        internalType: 'string',
        name: 'token',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'rate',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'paymentMethod',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'upperLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lowerLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endDate',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isBuy',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_token',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_paymentMethod',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_startDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_endDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_lowerLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_upperLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_rate',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isBuy',
        type: 'bool',
      },
    ],
    name: 'createCampaign',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256',
      },
    ],
    name: 'deactivateCampaign',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllCampaigns',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'isActive',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'token',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'rate',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'paymentMethod',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'upperLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lowerLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startDate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endDate',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isBuy',
            type: 'bool',
          },
        ],
        internalType: 'struct Campaign[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256',
      },
    ],
    name: 'getCampaign',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'isActive',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'token',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'rate',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'paymentMethod',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'upperLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lowerLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startDate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endDate',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isBuy',
            type: 'bool',
          },
        ],
        internalType: 'struct Campaign',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTotalCampaigns',
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
        internalType: 'string',
        name: '_token',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_paymentMethod',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '_campaignId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_startDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_endDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_lowerLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_upperLimit',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_rate',
        type: 'uint256',
      },
    ],
    name: 'updateCampaign',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
