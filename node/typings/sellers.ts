export interface Response {
  paging: Paging
  items: Item[]
}

export interface Paging {
  from: number
  to: number
  total: number
}

export interface Item {
  id: string
  logo: any
  taxCode: any
  email?: string
  description: any
  sellerCommissionConfiguration: any
  catalogSystemEndpoint: any
  CSCIdentification: any
  account: string
  channel?: string
  salesChannel?: string
  score: number
  exchangeReturnPolicy: any
  deliveryPolicy: any
  securityPrivacyPolicy: any
  fulfillmentSellerId: any
  user: any
  password: any
  groups: any[]
  integration: string
  offers: Offers
  name: string
  isActive: boolean
  fulfillmentEndpoint: string
  allowHybridPayments: boolean
  isBetterScope: boolean
  sellerType: number
  availableSalesChannels: AvailableSalesChannel[]
  isVtex: boolean
  trustPolicy: string
}

export interface Offers {
  pending: number
}

export interface AvailableSalesChannel {
  id: number
}
