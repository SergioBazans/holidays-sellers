import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { Response } from '../typings/sellers'

export default class Holiday extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://coolboxpe.myvtex.com', context, {
        ...options,
      headers: {
        ...options?.headers,
        VtexIdclientAutCookie: context.authToken,
      }
    })
  }

  public async getSellers(range: { from: number, to: number }): Promise<Response> {
    return this.http.get(`/api/seller-register/pvt/sellers?from=${range.from}&to=${range.to}`, {
      metric: 'seller-get',
    })
  }
}
