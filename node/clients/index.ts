import { IOClients } from '@vtex/api'

import Status from './status'
import Holiday from './holiday'
import Seller from './sellers'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
  public get holiday() {
    return this.getOrSet('holiday', Holiday)
  }
  public get seller() {
    return this.getOrSet('seller', Seller)
  }
}
