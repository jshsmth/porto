import * as Key from './key.js'
import * as Primitive from './primitive.js'
import * as Schema from './schema.js'
import { Type } from './schema.js'

export const Permissions = Type.Object({
  address: Primitive.Address,
  chainId: Schema.Optional(Primitive.Number),
  expiry: Type.Number(),
  id: Primitive.Hex,
  key: Type.Pick(Key.Base, ['publicKey', 'type']),
  permissions: Type.Object({
    calls: Key.CallPermissions,
    spend: Schema.Optional(Key.SpendPermissions),
  }),
})
export type Permissions = Schema.StaticDecode<typeof Permissions>

export const Request = Type.Object({
  address: Schema.Optional(Primitive.Address),
  chainId: Schema.Optional(Primitive.Number),
  expiry: Type.Number({ minimum: 1 }),
  key: Schema.Optional(Permissions.properties.key),
  permissions: Permissions.properties.permissions,
})
export type Request = Schema.StaticDecode<typeof Request>
