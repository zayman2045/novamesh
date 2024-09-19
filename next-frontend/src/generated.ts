import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EthUsdPriceConverter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41)
 */
export const ethUsdPriceConverterAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'getDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'ethAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'getEthInUsd',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLatestPrice',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41)
 */
export const ethUsdPriceConverterAddress = {
  11155111: '0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41)
 */
export const ethUsdPriceConverterConfig = {
  address: ethUsdPriceConverterAddress,
  abi: ethUsdPriceConverterAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NovaNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const novaNftAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'subscriptionId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'ethSent', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NovaNFT__InvalidEthValueSent',
  },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'want', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyCoordinatorCanFulfill',
  },
  {
    type: 'error',
    inputs: [
      { name: 'have', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'coordinator', internalType: 'address', type: 'address' },
    ],
    name: 'OnlyOwnerOrCoordinator',
  },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'vrfCoordinator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CoordinatorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'LootBoxActivated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'NFTMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'RandomNFTMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'TOKEN_PRICE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'activateLootBox',
    outputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'mintNFT',
    outputs: [{ name: 'newTokenId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256' },
      { name: 'randomWords', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'rawFulfillRandomWords',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'requestIdToRecipient',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 's_vrfCoordinator',
    outputs: [
      {
        name: '',
        internalType: 'contract IVRFCoordinatorV2Plus',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_vrfCoordinator', internalType: 'address', type: 'address' },
    ],
    name: 'setCoordinator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const novaNftAddress = {
  11155111: '0x640157b367b350589E68197E16B964273302d8BB',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const novaNftConfig = {
  address: novaNftAddress,
  abi: novaNftAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NovaToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const novaTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'mintTokens',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const novaTokenAddress = {
  11155111: '0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const novaTokenConfig = {
  address: novaTokenAddress,
  abi: novaTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ethUsdPriceConverterAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41)
 */
export const useReadEthUsdPriceConverter = /*#__PURE__*/ createUseReadContract({
  abi: ethUsdPriceConverterAbi,
  address: ethUsdPriceConverterAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ethUsdPriceConverterAbi}__ and `functionName` set to `"getDecimals"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41)
 */
export const useReadEthUsdPriceConverterGetDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ethUsdPriceConverterAbi,
    address: ethUsdPriceConverterAddress,
    functionName: 'getDecimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ethUsdPriceConverterAbi}__ and `functionName` set to `"getEthInUsd"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41)
 */
export const useReadEthUsdPriceConverterGetEthInUsd =
  /*#__PURE__*/ createUseReadContract({
    abi: ethUsdPriceConverterAbi,
    address: ethUsdPriceConverterAddress,
    functionName: 'getEthInUsd',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ethUsdPriceConverterAbi}__ and `functionName` set to `"getLatestPrice"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x4b5Af4A571E51ABE9e74fF323f46930fc7CCDe41)
 */
export const useReadEthUsdPriceConverterGetLatestPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: ethUsdPriceConverterAbi,
    address: ethUsdPriceConverterAddress,
    functionName: 'getLatestPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNft = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"TOKEN_PRICE"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftTokenPrice = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'TOKEN_PRICE',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftName = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftOwner = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"requestIdToRecipient"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftRequestIdToRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'requestIdToRecipient',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"s_vrfCoordinator"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftSVrfCoordinator =
  /*#__PURE__*/ createUseReadContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 's_vrfCoordinator',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftSymbol = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useReadNovaNftTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNft = /*#__PURE__*/ createUseWriteContract({
  abi: novaNftAbi,
  address: novaNftAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"activateLootBox"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftActivateLootBox =
  /*#__PURE__*/ createUseWriteContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'activateLootBox',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftApprove = /*#__PURE__*/ createUseWriteContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"mintNFT"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftMintNft = /*#__PURE__*/ createUseWriteContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'mintNFT',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftRawFulfillRandomWords =
  /*#__PURE__*/ createUseWriteContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"setCoordinator"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftSetCoordinator =
  /*#__PURE__*/ createUseWriteContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftTransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: novaNftAbi, address: novaNftAddress, functionName: 'transferFrom' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWriteNovaNftWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: novaNftAbi,
  address: novaNftAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNft = /*#__PURE__*/ createUseSimulateContract({
  abi: novaNftAbi,
  address: novaNftAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"activateLootBox"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftActivateLootBox =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'activateLootBox',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"mintNFT"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftMintNft =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'mintNFT',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"rawFulfillRandomWords"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftRawFulfillRandomWords =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'rawFulfillRandomWords',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"setCoordinator"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftSetCoordinator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'setCoordinator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaNftAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useSimulateNovaNftWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaNftAbi,
    address: novaNftAddress,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: novaNftAbi,
  address: novaNftAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"CoordinatorSet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftCoordinatorSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'CoordinatorSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"LootBoxActivated"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftLootBoxActivatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'LootBoxActivated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"MetadataUpdate"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"NFTMinted"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftNftMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'NFTMinted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"OwnershipTransferRequested"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftOwnershipTransferRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'OwnershipTransferRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"RandomNFTMinted"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftRandomNftMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'RandomNFTMinted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaNftAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x640157b367b350589E68197E16B964273302d8BB)
 */
export const useWatchNovaNftTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaNftAbi,
    address: novaNftAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useReadNovaToken = /*#__PURE__*/ createUseReadContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useReadNovaTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useReadNovaTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useReadNovaTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useReadNovaTokenName = /*#__PURE__*/ createUseReadContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useReadNovaTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useReadNovaTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useWriteNovaToken = /*#__PURE__*/ createUseWriteContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useWriteNovaTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"mintTokens"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useWriteNovaTokenMintTokens = /*#__PURE__*/ createUseWriteContract(
  { abi: novaTokenAbi, address: novaTokenAddress, functionName: 'mintTokens' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useWriteNovaTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useWriteNovaTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: novaTokenAbi,
    address: novaTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useSimulateNovaToken = /*#__PURE__*/ createUseSimulateContract({
  abi: novaTokenAbi,
  address: novaTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useSimulateNovaTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaTokenAbi,
    address: novaTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"mintTokens"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useSimulateNovaTokenMintTokens =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaTokenAbi,
    address: novaTokenAddress,
    functionName: 'mintTokens',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useSimulateNovaTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaTokenAbi,
    address: novaTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link novaTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useSimulateNovaTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: novaTokenAbi,
    address: novaTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaTokenAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useWatchNovaTokenEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: novaTokenAbi, address: novaTokenAddress },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useWatchNovaTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaTokenAbi,
    address: novaTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link novaTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x82E6E83ADcD22a0B4C376575E1B03347553b4eA4)
 */
export const useWatchNovaTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: novaTokenAbi,
    address: novaTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })
