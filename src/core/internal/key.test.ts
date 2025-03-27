import {
  Bytes,
  Hex,
  PublicKey,
  Secp256k1,
  WebAuthnP256,
  WebCryptoP256,
} from 'ox'
import { verifyHash } from 'viem/actions'
import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest'

import { getAccount } from '../../../test/src/actions.js'
import { getPorto } from '../../../test/src/porto.js'
import * as Call from './call.js'
import * as Delegation from './delegation.js'
import * as Key from './key.js'

const { client, delegation } = getPorto()

describe('createP256', () => {
  test('default', () => {
    const key = Key.createP256({
      role: 'admin',
    })

    const { hash, publicKey, ...rest } = key

    expect(publicKey).toBeDefined()
    expect(hash).toBeDefined()
    expect(rest).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "expiry": 0,
        "permissions": undefined,
        "privateKey": [Function],
        "role": "admin",
        "type": "p256",
      }
    `)
  })

  test('behavior: authorize + sign', async () => {
    const { account } = await getAccount(client)

    const key = Key.createP256({
      role: 'admin',
    })

    await Delegation.execute(client, {
      account,
      calls: [
        Call.authorize({
          key,
        }),
      ],
      delegation,
    })

    const payload = Hex.random(32)
    const signature = await Key.sign(key, {
      payload,
    })

    expect(
      await verifyHash(client, {
        address: account.address,
        hash: payload,
        signature,
      }),
    ).toBe(true)
  })
})

describe('createSecp256k1', () => {
  test('default', () => {
    const key = Key.createSecp256k1({
      role: 'admin',
    })

    const { hash, publicKey, ...rest } = key

    expect(publicKey).toBeDefined()
    expect(hash).toBeDefined()
    expect(rest).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "expiry": 0,
        "permissions": undefined,
        "privateKey": [Function],
        "role": "admin",
        "type": "secp256k1",
      }
    `)
  })

  test('behavior: authorize + sign', async () => {
    const { account } = await getAccount(client)

    const key = Key.createSecp256k1({
      role: 'admin',
    })

    await Delegation.execute(client, {
      account,
      calls: [
        Call.authorize({
          key,
        }),
      ],
      delegation,
    })

    const payload = Hex.random(32)
    const signature = await Key.sign(key, {
      payload,
    })

    expect(
      await verifyHash(client, {
        address: account.address,
        hash: payload,
        signature,
      }),
    ).toBe(true)
  })
})

describe('createWebAuthnP256', () => {
  beforeAll(() => {
    vi.stubGlobal('window', {
      location: {
        hostname: 'https://example.com',
      },
      document: {
        title: 'My Website',
      },
    })
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test('default', async () => {
    const key = await Key.createWebAuthnP256({
      createFn() {
        return Promise.resolve({
          id: 'm1-bMPuAqpWhCxHZQZTT6e-lSPntQbh3opIoGe7g4Qs',
          response: {
            getPublicKey() {
              return [
                48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134,
                72, 206, 61, 3, 1, 7, 3, 66, 0, 4, 171, 137, 20, 0, 20, 15, 196,
                248, 233, 65, 206, 15, 249, 14, 65, 157, 233, 71, 10, 202, 202,
                97, 59, 189, 113, 122, 71, 117, 67, 80, 49, 167, 216, 132, 49,
                142, 145, 159, 211, 179, 229, 166, 49, 216, 102, 216, 163, 128,
                180, 64, 99, 231, 15, 12, 56, 30, 225, 110, 6, 82, 247, 249,
                117, 84,
              ]
            },
          },
        } as any)
      },
      label: 'test',
      role: 'admin',
      userId: Bytes.from('0x0000000000000000000000000000000000000000'),
    })

    const { hash, publicKey, ...rest } = key

    expect(publicKey).toBeDefined()
    expect(hash).toBeDefined()
    expect(rest).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "credential": {
          "id": "m1-bMPuAqpWhCxHZQZTT6e-lSPntQbh3opIoGe7g4Qs",
          "publicKey": {
            "prefix": 4,
            "x": 77587693192652859874025541476425832478302972220661277688017673393936226333095n,
            "y": 97933141135755737384413290261786792525004108403409931527059712582886746584404n,
          },
        },
        "expiry": 0,
        "id": "0x0000000000000000000000000000000000000000",
        "permissions": undefined,
        "role": "admin",
        "rpId": undefined,
        "type": "webauthn-p256",
      }
    `)
  })
})

describe('createWebCryptoP256', () => {
  test('default', async () => {
    const key = await Key.createWebCryptoP256({
      role: 'admin',
    })

    const { hash, publicKey, ...rest } = key

    expect(hash).toBeDefined()
    expect(publicKey).toBeDefined()
    expect(rest).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "expiry": 0,
        "permissions": undefined,
        "privateKey": CryptoKey {},
        "role": "admin",
        "type": "p256",
      }
    `)
  })

  test('behavior: authorize + sign', async () => {
    const { account } = await getAccount(client)

    const key = await Key.createWebCryptoP256({
      role: 'admin',
    })

    await Delegation.execute(client, {
      account,
      calls: [
        Call.authorize({
          key,
        }),
      ],
      delegation,
    })

    const payload = Hex.random(32)
    const signature = await Key.sign(key, {
      payload,
    })

    expect(
      await verifyHash(client, {
        address: account.address,
        hash: payload,
        signature,
      }),
    ).toBe(true)
  })
})

describe('deserialize', () => {
  test('default', () => {
    const key = Key.fromP256({
      privateKey:
        '0x59ff6b8de3b3b39e94b6f9fc0590cf4e3eaa9b6736e6a49c9a6b324c4f58cb9f',
      role: 'admin',
    })
    const serialized = Key.serialize(key)
    const deserialized = Key.deserialize(serialized)

    expect(deserialized).toMatchInlineSnapshot(`
      {
        "canSign": false,
        "expiry": 0,
        "hash": "0xed7ac7c7b35b77e97be67b84f5889e0ab3ecc69ab65d57db191e11f8811e9965",
        "publicKey": "0xec0effa5f2f378cbf7fd2fa7ca1e8dc51cf777c129fa1c00a0e9a9205f2e511ff3f20b34a4e0b50587d055c0e0fad33d32cf1147d3bb2538fbab0d15d8e65008",
        "role": "admin",
        "type": "p256",
      }
    `)
  })
})

describe('from', () => {
  test('default', () => {
    const publicKey = PublicKey.toHex(
      Secp256k1.getPublicKey({
        privateKey:
          '0x72685afe259e683fa3b7819c4745383ba36366c7571fd17456fd4cd9777aedcb',
      }),
      {
        includePrefix: false,
      },
    )

    const key = Key.from({
      expiry: 69420,
      publicKey,
      role: 'admin',
      canSign: true,
      privateKey() {
        return '0x'
      },
      type: 'p256',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "expiry": 69420,
        "hash": "0x8708c3265105bf57dd6be9e79d384bde46f64e9cf75ddeb72bca10de17986b33",
        "privateKey": [Function],
        "publicKey": "0x144f4bf8bda60e5bf0e9f11a509e55a14987a6c5a63aed81bcb6939f9f5abc7c3598cce19015350ce8d30f11e57cbdd55ccfbc5f30d9ccf59ffd080967229fe9",
        "role": "admin",
        "type": "p256",
      }
    `)
  })

  test('serialized', () => {
    const publicKey = PublicKey.toHex(
      Secp256k1.getPublicKey({
        privateKey: Secp256k1.randomPrivateKey(),
      }),
      {
        includePrefix: false,
      },
    )

    const key = Key.from({
      expiry: 69420,
      publicKey,
      role: 'admin',
      canSign: true,
      privateKey() {
        return '0x'
      },
      type: 'p256',
    })
    const serialized = Key.serialize(key)

    expect({
      ...Key.from(serialized),
      hash: undefined,
    }).toEqual({
      expiry: 69420,
      publicKey,
      canSign: false,
      role: 'admin',
      type: 'p256',
    })
  })
})

describe('fromP256', () => {
  test('default', () => {
    const key = Key.fromP256({
      privateKey:
        '0x59ff6b8de3b3b39e94b6f9fc0590cf4e3eaa9b6736e6a49c9a6b324c4f58cb9f',
      role: 'admin',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "expiry": 0,
        "hash": "0xed7ac7c7b35b77e97be67b84f5889e0ab3ecc69ab65d57db191e11f8811e9965",
        "permissions": undefined,
        "privateKey": [Function],
        "publicKey": "0xec0effa5f2f378cbf7fd2fa7ca1e8dc51cf777c129fa1c00a0e9a9205f2e511ff3f20b34a4e0b50587d055c0e0fad33d32cf1147d3bb2538fbab0d15d8e65008",
        "role": "admin",
        "type": "p256",
      }
    `)
  })

  test('args: expiry', () => {
    const key = Key.fromP256({
      expiry: 69420,
      privateKey:
        '0x59ff6b8de3b3b39e94b6f9fc0590cf4e3eaa9b6736e6a49c9a6b324c4f58cb9f',
      role: 'admin',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "expiry": 69420,
        "hash": "0xed7ac7c7b35b77e97be67b84f5889e0ab3ecc69ab65d57db191e11f8811e9965",
        "permissions": undefined,
        "privateKey": [Function],
        "publicKey": "0xec0effa5f2f378cbf7fd2fa7ca1e8dc51cf777c129fa1c00a0e9a9205f2e511ff3f20b34a4e0b50587d055c0e0fad33d32cf1147d3bb2538fbab0d15d8e65008",
        "role": "admin",
        "type": "p256",
      }
    `)
  })
})

describe('fromRelay', () => {
  test('default', () => {
    const key = Key.fromRelay({
      expiry: 0,
      permissions: [
        {
          selector: '0x1249c58b',
          to: '0x3232323232323232323232323232323232323232',
          type: 'call',
        },
        {
          selector: '0xdeadbeef',
          to: '0x0000000000000000000000000000000000000000',
          type: 'call',
        },
        {
          limit: 1000000000000000000n,
          period: 'minute',
          token: '0x0000000000000000000000000000000000000000',
          type: 'spend',
        },
      ],
      publicKey:
        '0xec0effa5f2f378cbf7fd2fa7ca1e8dc51cf777c129fa1c00a0e9a9205f2e511ff3f20b34a4e0b50587d055c0e0fad33d32cf1147d3bb2538fbab0d15d8e65008',
      role: 'admin',
      type: 'p256',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": false,
        "expiry": 0,
        "hash": "0xed7ac7c7b35b77e97be67b84f5889e0ab3ecc69ab65d57db191e11f8811e9965",
        "permissions": {
          "calls": [
            {
              "signature": "0x1249c58b",
              "to": undefined,
            },
            {
              "signature": "0xdeadbeef",
              "to": "0x0000000000000000000000000000000000000000",
            },
          ],
          "spend": [
            {
              "limit": 1000000000000000000n,
              "period": "minute",
              "token": "0x0000000000000000000000000000000000000000",
            },
          ],
        },
        "publicKey": "0xec0effa5f2f378cbf7fd2fa7ca1e8dc51cf777c129fa1c00a0e9a9205f2e511ff3f20b34a4e0b50587d055c0e0fad33d32cf1147d3bb2538fbab0d15d8e65008",
        "role": "admin",
        "type": "p256",
      }
    `)
  })
})

describe('fromSecp256k1', () => {
  test('args: privateKey', () => {
    const key = Key.fromSecp256k1({
      privateKey:
        '0x59ff6b8de3b3b39e94b6f9fc0590cf4e3eaa9b6736e6a49c9a6b324c4f58cb9f',
      role: 'admin',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "expiry": 0,
        "hash": "0xd325ebfdb383f9fca8e4e1c443cdceddda39f1f860824156b75ec85f11b94a35",
        "permissions": undefined,
        "privateKey": [Function],
        "publicKey": "0x000000000000000000000000673ee8aabd3a62434cb9e3d7c6f9492e286bcb08",
        "role": "admin",
        "type": "secp256k1",
      }
    `)
  })

  test('args: address', () => {
    const key = Key.fromSecp256k1({
      address: '0x0000000000000000000000000000000000000000',
      role: 'admin',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": false,
        "expiry": 0,
        "hash": "0x6ce15638cb31daec095a6f3834f344957f69c7dc09ff935917447b3d65976595",
        "permissions": undefined,
        "privateKey": undefined,
        "publicKey": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "role": "admin",
        "type": "secp256k1",
      }
    `)
  })

  test('args: publicKey', () => {
    const key = Key.fromSecp256k1({
      publicKey: PublicKey.fromHex(
        '0x626c7f1042b6d3971be0e4c054165e36a6d6a5ace6af1773654d3360fccf0b25b0c998938d9b73e749023eb1c77f5930b5a87660deec42261a9a22fac9a56536',
      ),
      role: 'admin',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": false,
        "expiry": 0,
        "hash": "0xd325ebfdb383f9fca8e4e1c443cdceddda39f1f860824156b75ec85f11b94a35",
        "permissions": undefined,
        "privateKey": undefined,
        "publicKey": "0x000000000000000000000000673ee8aabd3a62434cb9e3d7c6f9492e286bcb08",
        "role": "admin",
        "type": "secp256k1",
      }
    `)
  })
})

describe('fromWebAuthnP256', () => {
  beforeAll(() => {
    vi.stubGlobal('window', {
      location: {
        hostname: 'https://example.com',
      },
      document: {
        title: 'My Website',
      },
    })
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  test('default', async () => {
    const credential = await WebAuthnP256.createCredential({
      createFn() {
        return Promise.resolve({
          id: 'm1-bMPuAqpWhCxHZQZTT6e-lSPntQbh3opIoGe7g4Qs',
          response: {
            getPublicKey() {
              return [
                48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134,
                72, 206, 61, 3, 1, 7, 3, 66, 0, 4, 171, 137, 20, 0, 20, 15, 196,
                248, 233, 65, 206, 15, 249, 14, 65, 157, 233, 71, 10, 202, 202,
                97, 59, 189, 113, 122, 71, 117, 67, 80, 49, 167, 216, 132, 49,
                142, 145, 159, 211, 179, 229, 166, 49, 216, 102, 216, 163, 128,
                180, 64, 99, 231, 15, 12, 56, 30, 225, 110, 6, 82, 247, 249,
                117, 84,
              ]
            },
          },
        } as any)
      },
      name: 'test',
    })

    const key = Key.fromWebAuthnP256({
      credential,
      id: '0x0000000000000000000000000000000000000000',
      role: 'admin',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "credential": {
          "id": "m1-bMPuAqpWhCxHZQZTT6e-lSPntQbh3opIoGe7g4Qs",
          "publicKey": {
            "prefix": 4,
            "x": 77587693192652859874025541476425832478302972220661277688017673393936226333095n,
            "y": 97933141135755737384413290261786792525004108403409931527059712582886746584404n,
          },
          "raw": {
            "id": "m1-bMPuAqpWhCxHZQZTT6e-lSPntQbh3opIoGe7g4Qs",
            "response": {
              "getPublicKey": [Function],
            },
          },
        },
        "expiry": 0,
        "hash": "0x2a7a39929a819ed8472f7fe3aa65a758432cc8ab833e9999f50217d55c70c50f",
        "id": "0x0000000000000000000000000000000000000000",
        "permissions": undefined,
        "publicKey": "0xab891400140fc4f8e941ce0ff90e419de9470acaca613bbd717a4775435031a7d884318e919fd3b3e5a631d866d8a380b44063e70f0c381ee16e0652f7f97554",
        "role": "admin",
        "rpId": undefined,
        "type": "webauthn-p256",
      }
    `)
  })
})

describe('fromWebCryptoP256', () => {
  test('default', async () => {
    const keyPair = await WebCryptoP256.createKeyPair()

    const key = Key.fromWebCryptoP256({
      keyPair: {
        privateKey: keyPair.privateKey,
        publicKey: {
          prefix: 4,
          x: 29425393363637877844360099756708459701670665037779565927194637716883031208592n,
          y: 4454192741171077737571435183656715320148197913661532282490480175757904146724n,
        },
      },
      role: 'admin',
    })

    expect(key).toMatchInlineSnapshot(`
      {
        "canSign": true,
        "expiry": 0,
        "hash": "0xa2085f4d3a69fcf0182dbe60a3b7da9b5fd8b2b54d7ea39d345ba82d6edc8fe1",
        "permissions": undefined,
        "privateKey": CryptoKey {},
        "publicKey": "0x410e2eb4820de45c0dd6730c300c3c66b8bc5885c963067fe0ff29c5e480329009d8fbd71e76257a2d5577e2211a62114eca15c9218d488209fa789a45497124",
        "role": "admin",
        "type": "p256",
      }
    `)
  })
})

describe('serialize', () => {
  test('default', () => {
    const key = Key.fromP256({
      privateKey:
        '0x59ff6b8de3b3b39e94b6f9fc0590cf4e3eaa9b6736e6a49c9a6b324c4f58cb9f',
      role: 'admin',
    })

    expect(Key.serialize(key)).toMatchInlineSnapshot(`
      {
        "expiry": 0,
        "isSuperAdmin": true,
        "keyType": 0,
        "publicKey": "0xec0effa5f2f378cbf7fd2fa7ca1e8dc51cf777c129fa1c00a0e9a9205f2e511ff3f20b34a4e0b50587d055c0e0fad33d32cf1147d3bb2538fbab0d15d8e65008",
      }
    `)
  })
})

describe('toRelay', () => {
  test('default', () => {
    const key = Key.fromP256({
      permissions: {
        calls: [
          {
            signature: 'mint()',
          },
          {
            signature: '0xdeadbeef',
            to: '0x0000000000000000000000000000000000000000',
          },
        ],
        spend: [
          {
            limit: 1000000000000000000n,
            period: 'minute',
            token: '0x0000000000000000000000000000000000000000',
          },
        ],
      },
      privateKey:
        '0x59ff6b8de3b3b39e94b6f9fc0590cf4e3eaa9b6736e6a49c9a6b324c4f58cb9f',
      role: 'admin',
    })

    expect(Key.toRelay(key)).toMatchInlineSnapshot(`
      {
        "expiry": 0,
        "permissions": [
          {
            "selector": "0x1249c58b",
            "to": "0x3232323232323232323232323232323232323232",
            "type": "call",
          },
          {
            "selector": "0xdeadbeef",
            "to": "0x0000000000000000000000000000000000000000",
            "type": "call",
          },
          {
            "limit": 1000000000000000000n,
            "period": "minute",
            "token": "0x0000000000000000000000000000000000000000",
            "type": "spend",
          },
        ],
        "publicKey": "0xec0effa5f2f378cbf7fd2fa7ca1e8dc51cf777c129fa1c00a0e9a9205f2e511ff3f20b34a4e0b50587d055c0e0fad33d32cf1147d3bb2538fbab0d15d8e65008",
        "role": "admin",
        "type": "p256",
      }
    `)
  })
})
