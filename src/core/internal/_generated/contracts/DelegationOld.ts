export const abi = [
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "entryPoint",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "ANY_FN_SEL",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ANY_KEYHASH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ANY_TARGET",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "CALL_TYPEHASH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "DOMAIN_TYPEHASH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "EMPTY_CALLDATA_FN_SEL",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ENTRY_POINT",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "EXECUTE_TYPEHASH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "MULTICHAIN_NONCE_PREFIX",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "approvedImplementationCallers",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "approvedImplementations",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "approvedSignatureCheckers",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address[]",
        "internalType": "address[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "authorize",
    "inputs": [
      {
        "name": "key",
        "type": "tuple",
        "internalType": "struct DelegationOld.Key",
        "components": [
          {
            "name": "expiry",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "keyType",
            "type": "uint8",
            "internalType": "enum DelegationOld.KeyType"
          },
          {
            "name": "isSuperAdmin",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "publicKey",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "canExecute",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "canExecutePackedInfos",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "compensate",
    "inputs": [
      {
        "name": "paymentToken",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "paymentRecipient",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "paymentAmount",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "eoa",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "userOpDigest",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "paymentSignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "computeDigest",
    "inputs": [
      {
        "name": "calls",
        "type": "tuple[]",
        "internalType": "struct ERC7821.Call[]",
        "components": [
          {
            "name": "to",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "data",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "nonce",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "result",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "eip712Domain",
    "inputs": [],
    "outputs": [
      {
        "name": "fields",
        "type": "bytes1",
        "internalType": "bytes1"
      },
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "version",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "verifyingContract",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "salt",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "extensions",
        "type": "uint256[]",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "execute",
    "inputs": [
      {
        "name": "mode",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "executionData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getKey",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "key",
        "type": "tuple",
        "internalType": "struct DelegationOld.Key",
        "components": [
          {
            "name": "expiry",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "keyType",
            "type": "uint8",
            "internalType": "enum DelegationOld.KeyType"
          },
          {
            "name": "isSuperAdmin",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "publicKey",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getKeys",
    "inputs": [],
    "outputs": [
      {
        "name": "keys",
        "type": "tuple[]",
        "internalType": "struct DelegationOld.Key[]",
        "components": [
          {
            "name": "expiry",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "keyType",
            "type": "uint8",
            "internalType": "enum DelegationOld.KeyType"
          },
          {
            "name": "isSuperAdmin",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "publicKey",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      },
      {
        "name": "keyHashes",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getNonce",
    "inputs": [
      {
        "name": "seqKey",
        "type": "uint192",
        "internalType": "uint192"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "hash",
    "inputs": [
      {
        "name": "key",
        "type": "tuple",
        "internalType": "struct DelegationOld.Key",
        "components": [
          {
            "name": "expiry",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "keyType",
            "type": "uint8",
            "internalType": "enum DelegationOld.KeyType"
          },
          {
            "name": "isSuperAdmin",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "publicKey",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "initializePREP",
    "inputs": [
      {
        "name": "initData",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "invalidateNonce",
    "inputs": [
      {
        "name": "nonce",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isPREP",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isValidSignature",
    "inputs": [
      {
        "name": "digest",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "signature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "keyAt",
    "inputs": [
      {
        "name": "i",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple",
        "internalType": "struct DelegationOld.Key",
        "components": [
          {
            "name": "expiry",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "keyType",
            "type": "uint8",
            "internalType": "enum DelegationOld.KeyType"
          },
          {
            "name": "isSuperAdmin",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "publicKey",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "keyCount",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "label",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rPREP",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "removeSpendLimit",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "period",
        "type": "uint8",
        "internalType": "enum GuardedExecutor.SpendPeriod"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revoke",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setCanExecute",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "fnSel",
        "type": "bytes4",
        "internalType": "bytes4"
      },
      {
        "name": "can",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setImplementationApproval",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "isApproved",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setImplementationCallerApproval",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "caller",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "isApproved",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setLabel",
    "inputs": [
      {
        "name": "newLabel",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setSignatureCheckerApproval",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "checker",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "isApproved",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setSpendLimit",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "period",
        "type": "uint8",
        "internalType": "enum GuardedExecutor.SpendPeriod"
      },
      {
        "name": "limit",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "spendAndExecuteInfos",
    "inputs": [
      {
        "name": "keyHashes",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "outputs": [
      {
        "name": "spends",
        "type": "tuple[][]",
        "internalType": "struct GuardedExecutor.SpendInfo[][]",
        "components": [
          {
            "name": "token",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "period",
            "type": "uint8",
            "internalType": "enum GuardedExecutor.SpendPeriod"
          },
          {
            "name": "limit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "spent",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lastUpdated",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "currentSpent",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "current",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      },
      {
        "name": "executes",
        "type": "bytes32[][]",
        "internalType": "bytes32[][]"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "spendInfos",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "results",
        "type": "tuple[]",
        "internalType": "struct GuardedExecutor.SpendInfo[]",
        "components": [
          {
            "name": "token",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "period",
            "type": "uint8",
            "internalType": "enum GuardedExecutor.SpendPeriod"
          },
          {
            "name": "limit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "spent",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "lastUpdated",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "currentSpent",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "current",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "startOfSpendPeriod",
    "inputs": [
      {
        "name": "unixTimestamp",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "period",
        "type": "uint8",
        "internalType": "enum GuardedExecutor.SpendPeriod"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "supportsExecutionMode",
    "inputs": [
      {
        "name": "mode",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "unwrapAndValidateSignature",
    "inputs": [
      {
        "name": "digest",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "signature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "isValid",
        "type": "bool",
        "internalType": "bool"
      },
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "upgradeProxyDelegation",
    "inputs": [
      {
        "name": "newImplementation",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "Authorized",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "key",
        "type": "tuple",
        "indexed": false,
        "internalType": "struct DelegationOld.Key",
        "components": [
          {
            "name": "expiry",
            "type": "uint40",
            "internalType": "uint40"
          },
          {
            "name": "keyType",
            "type": "uint8",
            "internalType": "enum DelegationOld.KeyType"
          },
          {
            "name": "isSuperAdmin",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "publicKey",
            "type": "bytes",
            "internalType": "bytes"
          }
        ]
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CanExecuteSet",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "target",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "fnSel",
        "type": "bytes4",
        "indexed": false,
        "internalType": "bytes4"
      },
      {
        "name": "can",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ImplementationApprovalSet",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "isApproved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ImplementationCallerApprovalSet",
    "inputs": [
      {
        "name": "implementation",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "caller",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "isApproved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LabelSet",
    "inputs": [
      {
        "name": "newLabel",
        "type": "string",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "NonceInvalidated",
    "inputs": [
      {
        "name": "nonce",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Revoked",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SignatureCheckerApprovalSet",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "checker",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "isApproved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SpendLimitRemoved",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "token",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "period",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum GuardedExecutor.SpendPeriod"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SpendLimitSet",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "indexed": false,
        "internalType": "bytes32"
      },
      {
        "name": "token",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "period",
        "type": "uint8",
        "indexed": false,
        "internalType": "enum GuardedExecutor.SpendPeriod"
      },
      {
        "name": "limit",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "BatchOfBatchesDecodingError",
    "inputs": []
  },
  {
    "type": "error",
    "name": "CannotSelfExecute",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ExceededSpendLimit",
    "inputs": [
      {
        "name": "token",
        "type": "address",
        "internalType": "address"
      }
    ]
  },
  {
    "type": "error",
    "name": "ExceedsCapacity",
    "inputs": []
  },
  {
    "type": "error",
    "name": "FnSelectorNotRecognized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "IndexOutOfBounds",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidNonce",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidPREP",
    "inputs": []
  },
  {
    "type": "error",
    "name": "KeyDoesNotExist",
    "inputs": []
  },
  {
    "type": "error",
    "name": "KeyHashIsZero",
    "inputs": []
  },
  {
    "type": "error",
    "name": "KeyTypeCannotBeSuperAdmin",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NewSequenceMustBeLarger",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NoSpendPermissions",
    "inputs": []
  },
  {
    "type": "error",
    "name": "OpDataTooShort",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SuperAdminCanExecuteEverything",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SuperAdminCanSpendAnything",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Unauthorized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "UnauthorizedCall",
    "inputs": [
      {
        "name": "keyHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "target",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ]
  },
  {
    "type": "error",
    "name": "UnsupportedExecutionMode",
    "inputs": []
  }
] as const;

export const code = "0x6101406040526040516152d93803806152d9833981016040819052610023916100e6565b306080524660a052606080610071604080518082018252600a8152692232b632b3b0ba34b7b760b11b60208083019190915282518084019093526005835264302e302e3160d81b9083015291565b815160209283012081519183019190912060c082905260e0819052604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8152938401929092529082015246606082015230608082015260a090206101005250506001600160a01b031661012052610113565b5f602082840312156100f6575f5ffd5b81516001600160a01b038116811461010c575f5ffd5b9392505050565b60805160a05160c05160e05161010051610120516151716101685f395f8181610684015281816119a401526142cc01525f612f4b01525f61300501525f612fdf01525f612f8f01525f612f6c01526151715ff3fe608060405260043610610275575f3560e01c80637656d3041161014e578063ce835432116100c0578063e5adda7111610079578063e5adda7114610853578063e9ae5c531461087f578063faba56d814610892578063fac750e0146108b1578063fcd4e707146108c5578063ff619c6b146108ed5761027c565b8063ce8354321461078f578063cebfe336146107ae578063d03c7914146107cd578063dcc09ebf146107ec578063e28250b414610818578063e537b27b146108345761027c565b8063ad07708311610112578063ad077083146106c5578063b70e36f0146106e4578063b75c7dc614610703578063bc2c554a14610722578063bf5309691461074f578063cb4774c41461076e5761027c565b80637656d304146106195780637b8e4ecc1461063857806384b0196e1461064c57806394430fa514610673578063a840fe49146106a65761027c565b80632f3f30c7116101e7578063515c9d6d116101ab578063515c9d6d14610548578063598daac4146105685780635f7c23ab1461058757806360d2f33d146105b35780636c95d5a7146105e65780636fd91454146105fa5761027c565b80632f3f30c7146104a757806335058501146104c157806336745d10146104db5780633e1b08121461050a5780634223b5c2146105295761027c565b8063164b859911610239578063164b8599146103b45780631a37ef23146103d35780631a912f3e146103f257806320606b70146104335780632081a278146104665780632150c518146104855761027c565b80630cef73b4146102b557806311a86fd6146102f057806312aaac701461032f578063136a12f71461035b5780631626ba7e1461037c5761027c565b3661027c57005b5f3560e01c63bc197c81811463f23a6e6182141763150b7a02821417156102a757806020526020603cf35b50633c10b94e5f526004601cfd5b3480156102c0575f5ffd5b506102d46102cf366004614622565b61090c565b6040805192151583526020830191909152015b60405180910390f35b3480156102fb575f5ffd5b5061031773323232323232323232323232323232323232323281565b6040516001600160a01b0390911681526020016102e7565b34801561033a575f5ffd5b5061034e610349366004614669565b610b08565b6040516102e7919061470f565b348015610366575f5ffd5b5061037a610375366004614744565b610bf7565b005b348015610387575f5ffd5b5061039b610396366004614622565b610d1c565b6040516001600160e01b031990911681526020016102e7565b3480156103bf575f5ffd5b5061037a6103ce36600461479e565b610d88565b3480156103de575f5ffd5b5061037a6103ed3660046147e2565b610e4f565b3480156103fd575f5ffd5b506104257f9085b19ea56248c94d86174b3784cfaaa8673d1041d6441f61ff52752dac848381565b6040519081526020016102e7565b34801561043e575f5ffd5b506104257f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81565b348015610471575f5ffd5b5061037a61048036600461480b565b610ea6565b348015610490575f5ffd5b50610499611000565b6040516102e7929190614877565b3480156104b2575f5ffd5b5061039b630707070760e51b81565b3480156104cc575f5ffd5b5061039b631919191960e11b81565b3480156104e6575f5ffd5b506104fa6104f53660046148e4565b61116a565b60405190151581526020016102e7565b348015610515575f5ffd5b50610425610524366004614922565b6112ce565b348015610534575f5ffd5b5061034e610543366004614669565b611304565b348015610553575f5ffd5b506104255f51602061511c5f395f51905f5281565b348015610573575f5ffd5b5061037a610582366004614948565b61133c565b348015610592575f5ffd5b506105a66105a13660046147e2565b611477565b6040516102e7919061498b565b3480156105be575f5ffd5b506104257f9a5906d05ceef8b2885ad4b95ec46e2570079e7f040193be5767e1329736de5781565b3480156105f1575f5ffd5b506104fa61148a565b348015610605575f5ffd5b50610425610614366004614a16565b6114a7565b348015610624575f5ffd5b5061037a610633366004614a5d565b6115c3565b348015610643575f5ffd5b506105a6611675565b348015610657575f5ffd5b50610660611689565b6040516102e79796959493929190614a81565b34801561067e575f5ffd5b506103177f000000000000000000000000000000000000000000000000000000000000000081565b3480156106b1575f5ffd5b506104256106c0366004614bdc565b6116af565b3480156106d0575f5ffd5b506105a66106df366004614669565b6116e8565b3480156106ef575f5ffd5b5061037a6106fe366004614669565b6116f6565b34801561070e575f5ffd5b5061037a61071d366004614669565b61175e565b34801561072d575f5ffd5b5061074161073c366004614c89565b6117b3565b6040516102e7929190614d55565b34801561075a575f5ffd5b5061037a6107693660046148e4565b6118ea565b348015610779575f5ffd5b5061078261198e565b6040516102e79190614e13565b34801561079a575f5ffd5b5061037a6107a9366004614e25565b6119a2565b3480156107b9575f5ffd5b506104256107c8366004614bdc565b611a56565b3480156107d8575f5ffd5b506104fa6107e7366004614669565b611abe565b3480156107f7575f5ffd5b5061080b610806366004614669565b611ae1565b6040516102e79190614eb6565b348015610823575f5ffd5b50686d3d4e7fb92a52381454610425565b34801561083f575f5ffd5b5061037a61084e366004614ec8565b611c9b565b34801561085e575f5ffd5b5061087261086d366004614669565b611d4c565b6040516102e79190614efb565b61037a61088d366004614622565b611d5f565b34801561089d575f5ffd5b506104256108ac366004614f0d565b611d8b565b3480156108bc575f5ffd5b50610425611e9f565b3480156108d0575f5ffd5b506108da61c1d081565b60405161ffff90911681526020016102e7565b3480156108f8575f5ffd5b506104fa610907366004614f2e565b611eb2565b5f806041831460408414171561093c57306109288686866120cc565b6001600160a01b03161491505f9050610b00565b602183101561094f57505f905080610b00565b506020198281018381118185180281189385019182013591601f19013560ff16156109805761097d86612154565b95505b505f61098b82610b08565b805190915064ffffffffff1642811090151516156109ac575f925050610b00565b5f816020015160028111156109c3576109c3614680565b03610a1e575f80603f86118735810290602089013502915091505f5f610a02856060015180516020820151604090920151603f90911191820292910290565b91509150610a138a85858585612172565b965050505050610afe565b600181602001516002811115610a3657610a36614680565b03610abb57606081810151805160208083015160409384015184518084018d9052855180820385018152601f8c018590049094028101870186529485018a8152603f9490941091820295910293610ab2935f92610aab928d918d918291018382808284375f9201919091525061220b92505050565b85856122f3565b94505050610afe565b600281602001516002811115610ad357610ad3614680565b03610afe57610afb8160600151806020019051810190610af39190614f85565b878787612412565b92505b505b935093915050565b604080516080810182525f80825260208201819052918101919091526060808201525f828152686d3d4e7fb92a52381760205260408120610b48906124f2565b8051909150610b6a5760405163395ed8c160e21b815260040160405180910390fd5b8051600619015f610b7e8383016020015190565b60d881901c855260c881901c915060d01c60ff166002811115610ba357610ba3614680565b84602001906002811115610bb957610bb9614680565b90816002811115610bcc57610bcc614680565b90525060ff811615156040850152610be983838151811082025290565b606085015250919392505050565b333014610c16576040516282b42960e81b815260040160405180910390fd5b8380610c3557604051638707510560e01b815260040160405180910390fd5b5f51602061511c5f395f51905f528514610c7057610c5285612558565b15610c7057604051630442081560e01b815260040160405180910390fd5b610c7a848461256c565b15610c98576040516303a6f8c760e21b815260040160405180910390fd5b610cbb60e084901c606086901b1783610800610cb389612594565b9291906125e3565b50604080518681526001600160a01b03861660208201526001600160e01b0319851681830152831515606082015290517f7eb91b8ac56c0864a4e4f5598082d140d04bed1a4dd62a41d605be2430c494e19181900360800190a15050505050565b5f5f5f610d2a86868661090c565b90925090508115158115151615610d6457610d4481610b08565b6040015180610d615750610d6133610d5b8361260c565b9061263b565b91505b81610d735763ffffffff610d79565b631626ba7e5b60e01b925050505b9392505050565b333014610da7576040516282b42960e81b815260040160405180910390fd5b686d3d4e7fb92a523813610dc4686d3d4e7fb92a5238198561263b565b610de0576040516282b42960e81b815260040160405180910390fd5b610df98383610200610df1886126e5565b92919061271e565b50826001600160a01b0316846001600160a01b03167f22e306b6bdb65906c2b1557fba289ced7fe45decec4c8df8dbc9c21a65ac305284604051610e41911515815260200190565b60405180910390a350505050565b333014610e6e576040516282b42960e81b815260040160405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80545f908152606083901b600c5251905550565b50565b333014610ec5576040516282b42960e81b815260040160405180910390fd5b8280610ee457604051638707510560e01b815260040160405180910390fd5b610eed84612558565b15610f0b5760405163f2fee1e160e01b815260040160405180910390fd5b5f610f1585612594565b6001600160a01b0385165f908152600282016020526040902060019091019150610f63846005811115610f4a57610f4a614680565b8254600160ff9092169190911b80198216845516151590565b15610f83575f610f7282612739565b03610f8357610f818286612754565b505b806001015f856005811115610f9a57610f9a614680565b60ff168152602081019190915260409081015f9081208181556001810182905560020155517fa17fd662986af6bbcda33ce6b68c967b609aebe07da86cd25ee7bfbd01a65a2790610ff090889088908890614fa0565b60405180910390a1505050505050565b6060805f61100c611e9f565b9050806001600160401b0381111561102657611026614b17565b60405190808252806020026020018201604052801561107557816020015b604080516080810182525f80825260208083018290529282015260608082015282525f199092019101816110445790505b509250806001600160401b0381111561109057611090614b17565b6040519080825280602002602001820160405280156110b9578160200160208202803683370190505b5091505f805b8281101561115f575f6110e082686d3d4e7fb92a5238135b60030190612889565b90505f6110ec82610b08565b805190915064ffffffffff16428110901515161561110b575050611157565b8087858151811061111e5761111e614fc3565b60200260200101819052508186858151811061113c5761113c614fc3565b60209081029190910101528361115181614feb565b94505050505b6001016110bf565b508084528252509091565b686d3d4e7fb92a523814545f90686d3d4e7fb92a52381390156111915760019150506112c8565b365f365f61119f88886128d2565b604080518481526001850160051b8101909152939750919550935091505f5b8481101561126057600581901b8601358601803590602080820135916040810135019081019035611250856112417f9085b19ea56248c94d86174b3784cfaaa8673d1041d6441f61ff52752dac84836001600160a01b03881687611222888861293e565b6040805194855260208501939093529183015260608201526080902090565b600190910160051b8801528690565b50505050508060010190506111be565b505f61127f3061127884805160051b60209091012090565b863561294f565b905080156020841017156112a65760405163e483bbcb60e01b815260040160405180910390fd5b6001870181905585856112ba82825f612980565b600199505050505050505050505b92915050565b6001600160c01b0381165f908152686d3d4e7fb92a5238156020526040808220549083901b67ffffffffffffffff1916176112c8565b604080516080810182525f80825260208201819052918101919091526060808201526112c861034983686d3d4e7fb92a5238136110d7565b33301461135b576040516282b42960e81b815260040160405180910390fd5b838061137a57604051638707510560e01b815260040160405180910390fd5b61138385612558565b156113a15760405163f2fee1e160e01b815260040160405180910390fd5b5f6113ab86612594565b60010190506113bc81866040612e0b565b506001600160a01b0385165f90815260018201602052604090206114028560058111156113eb576113eb614680565b8254600160ff9092169190911b8082178455161590565b5083816001015f87600581111561141b5761141b614680565b60ff1681526020019081526020015f205f01819055507f68c781b0acb659616fc73da877ee77ae95c51ce973b6c7a762c8692058351b4a878787876040516114669493929190615003565b60405180910390a150505050505050565b60606112c8611485836126e5565b612e47565b5f6114a230686d3d4e7fb92a52381360010154612f1b565b905090565b5f806114c38460408051828152600190920160051b8201905290565b90505f5b8481101561154057600581901b86013586018035801530021790602080820135916040810135019081019035611530856112417f9085b19ea56248c94d86174b3784cfaaa8673d1041d6441f61ff52752dac84836001600160a01b03881687611222888861293e565b50505050508060010190506114c7565b5061c1d060f084901c145f61159a7f9a5906d05ceef8b2885ad4b95ec46e2570079e7f040193be5767e1329736de5783855160051b6020870120886040805194855260208501939093529183015260608201526080902090565b9050816115af576115aa81612f49565b6115b8565b6115b88161305f565b979650505050505050565b3330146115e2576040516282b42960e81b815260040160405180910390fd5b5f838152686d3d4e7fb92a523817602052604090205460ff166116185760405163395ed8c160e21b815260040160405180910390fd5b6116298282610200610df18761260c565b50816001600160a01b0316837f30653b7562c17b712ebc81c7a2373ea1c255cf2a055380385273b5bf7192cc9983604051611668911515815260200190565b60405180910390a3505050565b60606114a2686d3d4e7fb92a523819612e47565b600f60f81b6060805f80808361169d6130d3565b97989097965046955030945091925090565b5f6112c8826020015160028111156116c9576116c9614680565b60ff168360600151805190602001205f1c5f9182526020526040902090565b60606112c86114858361260c565b333014611715576040516282b42960e81b815260040160405180910390fd5b611728686d3d4e7fb92a52381582613113565b6040518181527f4d9dbebf1d909894d9c26fe228c27cec643b2cb490124e5b658f4edd203c20c19060200160405180910390a150565b33301461177d576040516282b42960e81b815260040160405180910390fd5b6117868161317d565b60405181907fe5af7daed5ab2a2dc5f98d53619f05089c0c14d11a6621f6b906a2366c9a7ab3905f90a250565b60608082806001600160401b038111156117cf576117cf614b17565b60405190808252806020026020018201604052801561180257816020015b60608152602001906001900390816117ed5790505b509250806001600160401b0381111561181d5761181d614b17565b60405190808252806020026020018201604052801561185057816020015b606081526020019060019003908161183b5790505b5091505f5b818110156118e15761187e86868381811061187257611872614fc3565b90506020020135611ae1565b84828151811061189057611890614fc3565b60200260200101819052506118bc8686838181106118b0576118b0614fc3565b90506020020135611d4c565b8382815181106118ce576118ce614fc3565b6020908102919091010152600101611855565b50509250929050565b333014611909576040516282b42960e81b815260040160405180910390fd5b61195182828080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061194b92506124e5915050565b906131ec565b7faec6ef4baadc9acbdf52442522dfffda03abe29adba8d4af611bcef4cbe0c9ad828260405161198292919061505d565b60405180910390a15050565b60606114a2686d3d4e7fb92a5238136124f2565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811633143091871691909114166119f5576040516282b42960e81b815260040160405180910390fd5b611a00888888613244565b831580611a115750611a1184612558565b611a4c575f611a1f85612594565b6001600160a01b038a165f908152600282016020526040902060019091019150611a4a908a89613267565b505b5050505050505050565b5f333014611a76576040516282b42960e81b815260040160405180910390fd5b611a7f82613376565b9050807f3d3a48be5a98628ecf98a6201185102da78bbab8f63a4b2d6b9eef354f5131f583604051611ab1919061470f565b60405180910390a2919050565b5f6112c86001600160f81b031980841614611ad88461341f565b15159015151790565b60605f611aed83612594565b6001019050611b086040518060200160405280606081525090565b5f611b1283613431565b90505f5b81811015611c91575f611b298583613482565b6001600160a01b0381165f9081526001870160205260408120919250611b4e826134db565b90505f5b8151811015611c82575f828281518110611b6e57611b6e614fc3565b602002602001015190505f846001015f8360ff1681526020019081526020015f209050611bcc6040805160e081019091525f808252602082019081526020015f81526020015f81526020015f81526020015f81526020015f81525090565b8260ff166005811115611be157611be1614680565b81602001906005811115611bf757611bf7614680565b90816005811115611c0a57611c0a614680565b9052506001600160a01b0387168152815460408201526002820154608082015260018201546060820152611c4d4260ff851660058111156108ac576108ac614680565b60c08201819052608082015160608301519111150260a082015280611c728b82613534565b5050505050806001019050611b52565b50505050806001019050611b16565b5050519392505050565b333014611cba576040516282b42960e81b815260040160405180910390fd5b686d3d4e7fb92a523813611cdb686d3d4e7fb92a523819848461020061271e565b5081611d02576001600160a01b0383165f9081526007820160205260409020805460010190555b826001600160a01b03167f31471c9e79dc8535d9341d73e61eaf5e72e4134b3e5b16943305041201581d8883604051611d3f911515815260200190565b60405180910390a2505050565b60606112c8611d5a83612594565b6135dd565b6001600160f81b03198084169003611d8057611d7b8282613696565b505050565b611d7b83838361373c565b5f80826005811115611d9f57611d9f614680565b03611db257603c808404025b90506112c8565b6001826005811115611dc657611dc6614680565b03611dd757610e1080840402611dab565b6002826005811115611deb57611deb614680565b03611dfd576201518080840402611dab565b6003826005811115611e1157611e11614680565b03611e37576007600362015180808604918201929092069003620545ff85110202611dab565b5f5f611e42856137b4565b5090925090506004846005811115611e5c57611e5c614680565b03611e7657611e6d8282600161385e565b925050506112c8565b6005846005811115611e8a57611e8a614680565b03611e9b57611e6d8260018061385e565b5f5ffd5b5f6114a2686d3d4e7fb92a5238166138b5565b5f84611ec0575060016120c4565b611ec985612558565b15611ed6575060016120c4565b631919191960e11b60048310611eea575082355b82611ef95750630707070760e51b5b611f03858261256c565b15611f11575f9150506120c4565b5f611f1b87612594565b9050611f26816138b5565b15611fe357611f4160e083901c606088901b175b8290613901565b15611f51576001925050506120c4565b611f646332323232606088901b17611f3a565b15611f74576001925050506120c4565b611f9a60e083901c73191919191919191919191919191919191919191960611b17611f3a565b15611faa576001925050506120c4565b611fd37f3232323232323232323232323232323232323232000000000000000032323232611f3a565b15611fe3576001925050506120c4565b611ff95f51602061511c5f395f51905f52612594565b9050612004816138b5565b156120be5761201c60e083901c606088901b17611f3a565b1561202c576001925050506120c4565b61203f6332323232606088901b17611f3a565b1561204f576001925050506120c4565b61207560e083901c73191919191919191919191919191919191919191960611b17611f3a565b15612085576001925050506120c4565b6120ae7f3232323232323232323232323232323232323232000000000000000032323232611f3a565b156120be576001925050506120c4565b5f925050505b949350505050565b5f60405182604081146120e7576041811461210e575061213f565b60208581013560ff81901c601b0190915285356040526001600160ff1b031660605261211f565b60408501355f1a6020526040856040375b50845f526020600160805f60015afa5191505f606052806040523d61214c575b638baa579f5f526004601cfd5b509392505050565b5f815f526020600160205f60025afa5190503d61216d57fe5b919050565b5f6040518681528560208201528460408201528360608201528260808201525f5f5260205f60a0836101005afa503d6121d6576d1ab2e8006fd8b71907bf06a5bdee3b6121d65760205f60a0836dd01ea45f9efd5c54f037fa57ea1a5afa6121d657fe5b505f516001147f7fffffff800000007fffffffffffffffde737d56d38bcf4279dce5617e3192a8851110905095945050505050565b6122406040518060c0016040528060608152602001606081526020015f81526020015f81526020015f81526020015f81525090565b815160c081106122ed5760208301818101818251018281108260c0830111171561226c575050506122ed565b808151019250806020820151018181108382111782851084861117171561229657505050506122ed565b82815160208301011183855160208701011117156122b757505050506122ed565b8386528060208701525060408101516040860152606081015160608601526080810151608086015260a081015160a08601525050505b50919050565b5f5f5f61230288600180613985565b905060208601518051602082019150604088015160608901518451600d81016c1131b430b63632b733b2911d1160991b60981c8752848482011060228286890101515f1a14168160138901208286890120141685846014011085851760801c1074113a3cb832911d113bb2b130baba34371733b2ba1160591b60581c8589015160581c14161698505080865250505087515189151560021b600117808160218c51015116146020831188161696505085156123e657602089510181810180516020600160208601856020868a8c60025afa60011b5afa51915295503d90506123e657fe5b5050508215612407576124048287608001518860a001518888612172565b92505b505095945050505050565b5f6001600160a01b038516156120c457604051853b6124a2578260408114612442576041811461246957506124dc565b60208581013560ff81901c601b0190915285356040526001600160ff1b031660605261247a565b60408501355f1a6020526040856040375b50845f526020600160805f60015afa5180871860601b3d119250505f606052806040526124dc565b631626ba7e60e01b80825285600483015260248201604081528460448401528486606485013760208160648701858b5afa90519091141691505b50949350505050565b686d3d4e7fb92a52381390565b60405181546020820190600881901c5f8260ff84171461252057505080825260ff8116601f80821115612542575b855f5260205f205b8160051c8101548286015260208201915082821061252857505b508084525f920191825250602001604052919050565b5f61256282610b08565b6040015192915050565b6001600160a01b039190911630146001600160e01b03199190911663e9ae5c5360e01b141690565b5f805f51602061511c5f395f51905f5283146125b8576125b383613a76565b6125c7565b5f51602061511c5f395f51905f525b68a3bbbebc65eb8804df6009525f908152602990209392505050565b5f826125f8576125f38585613aa3565b612603565b612603858584613ba1565b95945050505050565b5f818152686d3d4e7fb92a523818602052604081208054601f5263d4203f8b6004528152603f81208190610d81565b63978aab926004525f828152602481206001600160a01b03929092169168fbb67fda52d4bfb8be1983016126765763f5a267f15f526004601cfd5b826126885768fbb67fda52d4bfb8bf92505b80546001600160601b0381166126cc5760019250838160601c03156126dd57600182015460601c84146126dd57600282015460601c84146126dd575b5f92506126dd565b81602052835f5260405f2054151592505b505092915050565b6001600160a01b0381165f908152686d3d4e7fb92a52381a602052604081208054601f5263d4203f8b6004528152603f81208190610d81565b5f8261272e576125f38585612754565b612603858584612e0b565b5f81545b80156122ed5760019182019181190181161861273d565b63978aab926004525f828152602481206001600160a01b03929092169168fbb67fda52d4bfb8be19830161278f5763f5a267f15f526004601cfd5b826127a15768fbb67fda52d4bfb8bf92505b80546001600160601b0381168061281b5760019350848260601c036127d95760018301805484556002840180549091555f9055612880565b84600184015460601c036127fa5760028301805460018501555f9055612880565b84600284015460601c03612813575f6002840155612880565b5f9350612880565b82602052845f5260405f20805480612834575050612880565b60018360011c039250826001820314612864578285015460601c8060601b60018303870155805f52508060405f20555b5060018260011b17845460601c60601b1784555f815550600193505b50505092915050565b6318fb58646004525f8281526024902081015468fbb67fda52d4bfb8bf811415026128b3836138b5565b82106112c857604051634e23d03560e01b815260040160405180910390fd5b365f80806128e08686613bbe565b935093506128f686866040908111913510171590565b1561293557602085870103866020013580880160208101945080359350828482011182851760401c17156129315763ba597e7e5f526004601cfd5b5050505b92959194509250565b5f8183604051375060405120919050565b5f82815260a082901c602052604090206001600160a01b0316612973848284613c54565b610d8157505f9392505050565b801580612991575061299181612558565b156129a157611d7b838383613cb0565b5f6129ab82612594565b6001019050612a196040805160e081018252606060c0820181815282528251602080820185528282528084019190915283518082018552828152838501528351808201855282815282840152835180820185528281526080840152835190810190935282529060a082015290565b5f612a2383613431565b90505f5b81811015612a75575f612a3a8583613482565b90506001600160a01b03811615612a6c576040840151612a5a9082613d07565b506060840151612a6a905f613534565b505b50600101612a27565b505f5f5b86811015612c3357600581901b880135880180358015300217906020808201359160408101350190810190358215612ab857612ab58387615070565b95505b6004811015612aca5750505050612c2b565b813560e01c63a9059cbb819003612b00576040890151612aea9086613d07565b50612afe602484013560608b015190613d26565b505b8063ffffffff1663095ea7b303612b485760248301355f03612b26575050505050612c2b565b8851612b329086613d07565b50612b46600484013560208b015190613d26565b505b8063ffffffff166387517c4503612bc0576001600160a01b0385166e22d473030f116ddee9f6b43ac78ba314612b82575050505050612c2b565b60448301355f03612b97575050505050612c2b565b612baa600484013560808b015190613d26565b50612bbe602484013560a08b015190613d26565b505b8063ffffffff1663598daac403612c25576001600160a01b0385163014612beb575050505050612c2b565b8a600484013514612c00575050505050612c2b565b612c13602484013560408b015190613d26565b506060890151612c23905f613534565b505b50505050505b600101612a79565b50604083015151606084015151612c4a9190613d3c565b5f612c7d612c5b8560400151515190565b60606040518260201c5f031790508181528160051b6020820101604052919050565b90505f5b60408501515151811015612cc957604085015151600582901b0160200151612cbf82612cad8330613e12565b85919060059190911b82016020015290565b5050600101612c81565b50612cd5888888613cb0565b5f8080526001860160205260408120612cee9184613267565b5f5b60408501515151811015612d7c57604085810151516020600584901b9182018101516001600160a01b0381165f90815260018b018352939093206060890151518301820151928601909101519091612d729183918591612d6d9190612d6290612d598930613e12565b80821191030290565b808218908210021890565b613267565b5050600101612cf0565b505f5b84515151811015612dc157845151600582901b0160200151612db881612db2848960200151613e0290919063ffffffff16565b5f613e3c565b50600101612d7f565b505f5b60808501515151811015611a4a57608085015151600582901b0160200151612e0281612dfd848960a00151613e0290919063ffffffff16565b613e86565b50600101612dc4565b5f612e168484613ee1565b90508015610d815781612e2885613431565b1115610d815760405163155176b960e11b815260040160405180910390fd5b63978aab926004525f818152602481206060915068fbb67fda52d4bfb8bf81548060a01b60a01c6040519450846020018260601c9250838314158302815281612ed5578215612ed057600191508185015460601c92508215612ed0578284141590920260208301525060028381015460601c918215612ed0576003915083831415830260408201525b612f05565b600191821c915b82811015612f03578581015460601c858114158102600583901b8401529350600101612edc565b505b8186528160051b81016040525050505050919050565b5f5f612f268461403c565b905082156001600160a01b03821615171580156120c457506120c4848483613c54565b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000030147f000000000000000000000000000000000000000000000000000000000000000046141661303c5750604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527f000000000000000000000000000000000000000000000000000000000000000060208201527f00000000000000000000000000000000000000000000000000000000000000009181019190915246606082015230608082015260a090205b6719010000000000005f5280601a5281603a52604260182090505f603a52919050565b5f5f5f61306a6130d3565b915091506040517f91ab3d17e3a50a9d89e63fd30b92be7f5336b03b287bb946787a83a9d62a27665f5282516020840120602052815160208301206040523060605260805f206020526119015f52846040526042601e20935080604052505f6060525050919050565b604080518082018252600a8152692232b632b3b0ba34b7b760b11b60208083019190915282518084019093526005835264302e302e3160d81b9083015291565b604081811c5f90815260208490522080546001600160401b038316101561314d576040516312ee5c9360e01b815260040160405180910390fd5b613177613171836001600160401b031667fffffffffffffffe808218908211021890565b60010190565b90555050565b5f818152686d3d4e7fb92a52381760209081526040808320839055686d3d4e7fb92a523818909152902080546001019055686d3d4e7fb92a5238136131cb686d3d4e7fb92a52381683613aa3565b6131e85760405163395ed8c160e21b815260040160405180910390fd5b5050565b80518060081b60ff175f60fe8311613215575050601f8281015160081b8217908083111561323c575b60208401855f5260205f205b828201518360051c8201556020830192508483106132215750505b509092555050565b6001600160a01b03831661325c57611d7b828261405a565b611d7b838383614073565b8061327157505050565b5f61327b846134db565b905080515f0361329e57604051635ee7e5b160e01b815260040160405180910390fd5b5f5b815181101561336f575f8282815181106132bc576132bc614fc3565b602002602001015190505f866001015f8360ff1681526020019081526020015f2090505f6132f9428460ff1660058111156108ac576108ac614680565b9050808260020154101561331557600282018190555f60018301555b815f015486836001015f82825461332c9190615070565b92505081905511156133615760405163482a648960e11b81526001600160a01b03881660048201526024015b60405180910390fd5b5050508060010190506132a0565b5050505050565b5f8160400151156133ab5761338e82602001516140b3565b6133ab576040516321b9b33960e21b815260040160405180910390fd5b6133b4826116af565b90505f686d3d4e7fb92a52381360608401518451602080870151604080890151905195965061340b956133e995949301615083565b60408051601f198184030181529181525f8581526004850160205220906131ec565b61341860038201836140cf565b5050919050565b5f613429826141e1565b151592915050565b63978aab926004525f8181526024812080548060a01b60a01c8060011c9350808260601c151761347a5760019350838301541561347a5760029350838301541561347a57600393505b505050919050565b63978aab926004525f828152602481208281015460601c915068fbb67fda52d4bfb8bf821415820291506134b584613431565b83106134d457604051634e23d03560e01b815260040160405180910390fd5b5092915050565b604051815460208201905f905b801561351e5761ffff8116613503576010918201911c6134e8565b8183526020600582901b16909201916001918201911c6134e8565b5050601f198282030160051c8252604052919050565b604080516060815290819052829050825160018151018060051b661d174b32e2c5536020840351818106158282040290508083106135cc5782811781018115826020018701604051181761359857828102601f1987015285016020016040526135cc565b602060405101816020018101604052808a52601f19855b88810151838201528101806135af57509184029181019190915294505b505082019390935291909152919050565b6318fb58646004525f81815260249020801954604051919068fbb67fda52d4bfb8bf90602084018161365657835480156136505780841415028152600184810154909250801561365057808414150260208201526002848101549092508015613650576003925083811415810260408301525b50613681565b8160011c91505f5b8281101561367f57848101548481141502600582901b83015260010161365e565b505b8185528160051b810160405250505050919050565b686d3d4e7fb92a523813823560601c6014838118818510021880850190808511908503026136cd686d3d4e7fb92a5238198461263b565b6136e9576040516282b42960e81b815260040160405180910390fd5b333014613719576136fd33610d5b856126e5565b613719576040516282b42960e81b815260040160405180910390fd5b604051818382375f388383875af4613733573d5f823e3d81fd5b50505050505050565b5f613746846141e1565b9050806003036137615761375b84848461422a565b50505050565b365f365f8461377757637f1812755f526004601cfd5b5085358087016020810194503592505f906040116002861411156137a5575050602080860135860190810190355b611a4c888888878787876142c2565b5f80806138516137c762015180866150d2565b5f5f5f620afa6c8401935062023ab1840661016d62023ab082146105b48304618eac84048401030304606481048160021c8261016d0201038203915060996002836005020104600161030161f4ff830201600b1c84030193506b030405060708090a0b0c010260a01b811a9450506003841061019062023ab1880402820101945050509193909250565b9196909550909350915050565b5f620afa6c1961019060038510860381810462023ab10260649290910691820461016d830260029390931c9290920161f4ff600c60098901060261030101600b1c8601019190910301016201518002949350505050565b6318fb58646004525f818152602481208019548060011c9250806134185781545f9350156134185760019250828201541561341857600292508282015415613418575060039392505050565b6318fb58646004525f8281526024812068fbb67fda52d4bfb8bf830361392e5763f5a267f15f526004601cfd5b826139405768fbb67fda52d4bfb8bf92505b8019546139715780546001925083146134d457600181015483146134d457600281015483146134d4575f91506134d4565b602052505f90815260409020541515919050565b60608351801561214c576003600282010460021b60405192507f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f526106708515027f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392d5f18603f526020830181810183886020010180515f82525b60038a0199508951603f8160121c16515f53603f81600c1c1651600153603f8160061c1651600253603f811651600353505f518452600484019350828410613a00579052602001604052613d3d60f01b60038406600204808303919091525f861515909102918290035290038252509392505050565b5f818152686d3d4e7fb92a523818602052604081208054601f5263d4203f8b6004528152603f81206112c8565b6318fb58646004525f8281526024812068fbb67fda52d4bfb8bf8303613ad05763f5a267f15f526004601cfd5b82613ae25768fbb67fda52d4bfb8bf92505b80195480613b43576001925083825403613b0f5760018201805483556002830180549091555f90556126dd565b83600183015403613b2d5760028201805460018401555f90556126dd565b836002830154036126c4575f60028301556126dd565b81602052835f5260405f20805480613b5c5750506126dd565b60018360011c039250826001820314613b8657828401548060018303860155805f52508060405f20555b5060018260011b178319555f81555060019250505092915050565b5f613bac84846140cf565b90508015610d815781612e28856138b5565b365f833580850160208587010360208201945081359350808460051b8301118360401c1715613bf45763ba597e7e5f526004601cfd5b8315613c4a578392505b6001830392508260051b850135915081850160408101358082018381358201118460408501111782861782351760401c1715613c415763ba597e7e5f526004601cfd5b50505082613bfe575b5050509250929050565b5f82815260208082206080909152601f8390526305d78094600b526019602720613ca66001600160a01b03871680151590613c9284601b8a88614420565b6001600160a01b0316149015159015151690565b9695505050505050565b5f82613cbc5750505050565b600581901b84013584018035801530021790602080820135916040810135019081019035613ced848484848a61445a565b50505050838390508160010191508103613cbc5750505050565b604080516060815290819052610d8183836001600160a01b0316613534565b604080516060815290819052610d818383613534565b6040518151835114613d5a57634e487b715f5260326020526024601cfd5b8251613d6557505050565b5f5f613d7085614498565b613d7985614498565b91509150613d86856144c7565b613d8f8561451c565b848403601f196020870187518752875160051b3684830137845160051b5b8086015181860151835b82815114613dc757602001613db7565b860180518201808252821115613de957634e487b715f5260116020526024601cfd5b505050820180613dad5750505050826040525050505050565b905160059190911b016020015190565b5f816014526370a0823160601b5f5260208060246010865afa601f3d111660205102905092915050565b816014528060345263095ea7b360601b5f5260205f604460105f875af18060015f511416613e7c57803d853b151710613e7c57633e3f8f735f526004601cfd5b505f603452505050565b60405163cc53287f8152602080820152600160408201528260601b60601c60608201528160601b60601c60808201525f3860a0601c84015f6e22d473030f116ddee9f6b43ac78ba35af1611d7b576396b3de235f526004601cfd5b63978aab926004525f828152602481206001600160a01b03929092169168fbb67fda52d4bfb8be198301613f1c5763f5a267f15f526004601cfd5b82613f2e5768fbb67fda52d4bfb8bf92505b80546001600160601b0381168260205280613ff0578160601c80613f5c578560601b84556001945050612880565b858103613f695750612880565b600184015460601c80613f8a578660601b6001860155600195505050612880565b868103613f98575050612880565b600285015460601c80613fba578760601b600287015560019650505050612880565b878103613fc957505050612880565b5f928352604080842060019055918352818320600290558252902060039055506007908117905b845f5260405f20805461403257600191821c80830182559194508161401e578560601b600317845550612880565b8560601b8285015582600201845550612880565b5050505092915050565b5f60205f5f843c5f5160f01c61ef011460035160601c029050919050565b5f385f3884865af16131e85763b12d13eb5f526004601cfd5b816014528060345263a9059cbb60601b5f5260205f604460105f875af18060015f511416613e7c57803d853b151710613e7c576390b8ec185f526004601cfd5b5f808260028111156140c7576140c7614680565b141592915050565b6318fb58646004525f8281526024812068fbb67fda52d4bfb8bf83036140fc5763f5a267f15f526004601cfd5b8261410e5768fbb67fda52d4bfb8bf92505b80195481602052806141b25781548061412e5784835560019350506126dd565b84810361413b57506126dd565b600183015480614156578560018501556001945050506126dd565b8581036141645750506126dd565b60028401548061418057866002860155600195505050506126dd565b86810361418f575050506126dd565b5f9283526040808420600190559183528183206002905582529020600390555060075b835f5260405f20805461288057600191821c8381018690558083019182905590821b82178319559092506126dd565b6003690100000000007821000260b09290921c69ffff00000000ffffffff16918214026901000000000078210001821460011b6901000000000000000000909214919091171790565b600360b01b929092189181358083018035916020808301928686019291600586901b9091018101831090861017604082901c171561426f57633995943b5f526004601cfd5b505f5b83811461373357365f8260051b850135808601602081019350803592505084828401118160401c17156142ac57633995943b5f526004601cfd5b506142b8898383611d5f565b5050600101614272565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163303614325576020811015614314576040516355fe73fd60e11b815260040160405180910390fd5b61432084848435612980565b613733565b8061435457333014614349576040516282b42960e81b815260040160405180910390fd5b61432084845f612980565b6020811015614376576040516355fe73fd60e11b815260040160405180910390fd5b813561438b686d3d4e7fb92a52381582614565565b6040518181527f4d9dbebf1d909894d9c26fe228c27cec643b2cb490124e5b658f4edd203c20c19060200160405180910390a15f5f6143e86143ce8888866114a7565b60208087108188180218808801908088039088110261090c565b9150915081614409576040516282b42960e81b815260040160405180910390fd5b614414878783612980565b50505050505050505050565b5f604051855f5260ff851660205283604052826060526020604060805f60015afa505f6060523d6060185191508060405250949350505050565b61446681868585611eb2565b61448b578085848460405163f78c1b5360e01b815260040161335894939291906150f1565b61336f858585858561457c565b604051815160051b8101602001818084035b8082015182528160200191508282036144aa575060405250919050565b80515f82528060051b8201601f19602084015b60200182811161451557805182820180518281116144fa575050506144da565b5b6020820152830180518281116144fb5750602001526144da565b5050509052565b6002815110610ea3576020810160408201600183510160051b83015b815183511461454c57602083019250815183525b60208201915080820361453857505081900360051c9052565b5f5f614571848461459f565b600101905550505050565b604051828482375f388483888a5af1614597573d5f823e3d81fd5b505050505050565b604081811c5f90815260208490522080546001600160401b038084168214908210166145de57604051633ab3447f60e11b815260040160405180910390fd5b9250929050565b5f5f83601f8401126145f5575f5ffd5b5081356001600160401b0381111561460b575f5ffd5b6020830191508360208285010111156145de575f5ffd5b5f5f5f60408486031215614634575f5ffd5b8335925060208401356001600160401b03811115614650575f5ffd5b61465c868287016145e5565b9497909650939450505050565b5f60208284031215614679575f5ffd5b5035919050565b634e487b7160e01b5f52602160045260245ffd5b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b64ffffffffff81511682525f6020820151600381106146e3576146e3614680565b806020850152506040820151151560408401526060820151608060608501526120c46080850182614694565b602081525f610d8160208301846146c2565b6001600160a01b0381168114610ea3575f5ffd5b8035801515811461216d575f5ffd5b5f5f5f5f60808587031215614757575f5ffd5b84359350602085013561476981614721565b925060408501356001600160e01b031981168114614785575f5ffd5b915061479360608601614735565b905092959194509250565b5f5f5f606084860312156147b0575f5ffd5b83356147bb81614721565b925060208401356147cb81614721565b91506147d960408501614735565b90509250925092565b5f602082840312156147f2575f5ffd5b8135610d8181614721565b80356006811061216d575f5ffd5b5f5f5f6060848603121561481d575f5ffd5b83359250602084013561482f81614721565b91506147d9604085016147fd565b5f8151808452602084019350602083015f5b8281101561486d57815186526020958601959091019060010161484f565b5093949350505050565b5f604082016040835280855180835260608501915060608160051b8601019250602087015f5b828110156148ce57605f198786030184526148b98583516146c2565b9450602093840193919091019060010161489d565b505050508281036020840152612603818561483d565b5f5f602083850312156148f5575f5ffd5b82356001600160401b0381111561490a575f5ffd5b614916858286016145e5565b90969095509350505050565b5f60208284031215614932575f5ffd5b81356001600160c01b0381168114610d81575f5ffd5b5f5f5f5f6080858703121561495b575f5ffd5b84359350602085013561496d81614721565b925061497b604086016147fd565b9396929550929360600135925050565b602080825282518282018190525f918401906040840190835b818110156149cb5783516001600160a01b03168352602093840193909201916001016149a4565b509095945050505050565b5f5f83601f8401126149e6575f5ffd5b5081356001600160401b038111156149fc575f5ffd5b6020830191508360208260051b85010111156145de575f5ffd5b5f5f5f60408486031215614a28575f5ffd5b83356001600160401b03811115614a3d575f5ffd5b614a49868287016149d6565b909790965060209590950135949350505050565b5f5f5f60608486031215614a6f575f5ffd5b8335925060208401356147cb81614721565b60ff60f81b8816815260e060208201525f614a9f60e0830189614694565b8281036040840152614ab18189614694565b606084018890526001600160a01b038716608085015260a0840186905283810360c0850152845180825260208087019350909101905f5b81811015614b06578351835260209384019390920191600101614ae8565b50909b9a5050505050505050505050565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b0381118282101715614b4d57614b4d614b17565b60405290565b5f82601f830112614b62575f5ffd5b81356001600160401b03811115614b7b57614b7b614b17565b604051601f8201601f19908116603f011681016001600160401b0381118282101715614ba957614ba9614b17565b604052818152838201602001851015614bc0575f5ffd5b816020850160208301375f918101602001919091529392505050565b5f60208284031215614bec575f5ffd5b81356001600160401b03811115614c01575f5ffd5b820160808185031215614c12575f5ffd5b614c1a614b2b565b813564ffffffffff81168114614c2e575f5ffd5b8152602082013560038110614c41575f5ffd5b6020820152614c5260408301614735565b604082015260608201356001600160401b03811115614c6f575f5ffd5b614c7b86828501614b53565b606083015250949350505050565b5f5f60208385031215614c9a575f5ffd5b82356001600160401b03811115614caf575f5ffd5b614916858286016149d6565b60068110614ccb57614ccb614680565b9052565b5f8151808452602084019350602083015f5b8281101561486d57815180516001600160a01b031687526020808201515f91614d0c908a0182614cbb565b505060408181015190880152606080820151908801526080808201519088015260a0808201519088015260c0908101519087015260e09095019460209190910190600101614ce1565b5f604082016040835280855180835260608501915060608160051b8601019250602087015f5b82811015614dac57605f19878603018452614d97858351614ccf565b94506020938401939190910190600101614d7b565b50505050828103602084015280845180835260208301915060208160051b840101602087015f5b83811015614e0557601f19868403018552614def83835161483d565b6020958601959093509190910190600101614dd3565b509098975050505050505050565b602081525f610d816020830184614694565b5f5f5f5f5f5f5f5f60e0898b031215614e3c575f5ffd5b8835614e4781614721565b97506020890135614e5781614721565b9650604089013595506060890135614e6e81614721565b94506080890135935060a0890135925060c08901356001600160401b03811115614e96575f5ffd5b614ea28b828c016145e5565b999c989b5096995094979396929594505050565b602081525f610d816020830184614ccf565b5f5f60408385031215614ed9575f5ffd5b8235614ee481614721565b9150614ef260208401614735565b90509250929050565b602081525f610d81602083018461483d565b5f5f60408385031215614f1e575f5ffd5b82359150614ef2602084016147fd565b5f5f5f5f60608587031215614f41575f5ffd5b843593506020850135614f5381614721565b925060408501356001600160401b03811115614f6d575f5ffd5b614f79878288016145e5565b95989497509550505050565b5f60208284031215614f95575f5ffd5b8151610d8181614721565b8381526001600160a01b0383166020820152606081016120c46040830184614cbb565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201614ffc57614ffc614fd7565b5060010190565b8481526001600160a01b0384166020820152608081016150266040830185614cbb565b82606083015295945050505050565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b602081525f6120c4602083018486615035565b808201808211156112c8576112c8614fd7565b5f85518060208801845e60d886901b6001600160d81b031916908301908152600385106150b2576150b2614680565b60f894851b600582015292151590931b6006830152506007019392505050565b5f826150ec57634e487b7160e01b5f52601260045260245ffd5b500490565b8481526001600160a01b03841660208201526060604082018190525f90613ca6908301848661503556fe3232323232323232323232323232323232323232323232323232323232323232a264697066735822122081958274c4d48c05fc1a99f3b7c279e0ea64b82d9140944cc464ee737fb48b4e64736f6c634300081d0033" as const;

