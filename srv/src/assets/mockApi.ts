import Config from '../config/config'
import axios from 'axios'

export type Contacts = {
  'id':number
  'createdAt':string,
  'firstName':string,
  'lastName':string,
  'email':string,
  'avatar':string,
}[]

class MockApi {
    url: string;
    constructor () {
      this.url = Config.mockApi.url
    }

    async getContacts ():Promise<Contacts> {
      const response = await axios.get(`${this.url}contacts`)
      return response.data
    }
}
export default MockApi
