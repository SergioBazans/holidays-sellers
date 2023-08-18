import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import { HRequest, IHoliday } from '../typings/holiday'

export default class Seller extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(options?.baseURL!, context, {
        ...options,
      headers: {
        ...options?.headers,
        "X-VTEX-API-AppKey": "",
        "X-VTEX-API-AppToken": "",
      }
    })
  }

  public async getHolidays(baseURL: string, VtexIdclientAutCookie: string): Promise<IHoliday[]> {
    return this.http.get("/api/logistics/pvt/configuration/holidays", {
      metric: 'holiday-get',
      baseURL,
      headers: {
        VtexIdclientAutCookie
      }
    })
  }

  public async createHolidays(baseURL: string, holidayId: string, data: HRequest, VtexIdclientAutCookie: string): Promise<any> {
    return this.http.put(`/api/logistics/pvt/configuration/holidays/${holidayId}`, data, {
      metric: "holiday-put",
      baseURL,
      headers: {
        VtexIdclientAutCookie
      }
    })
  }
}
