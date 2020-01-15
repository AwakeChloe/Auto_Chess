import axios from 'axios'
import { AxiosInstance } from 'axios'
import { LocalStorage } from '../common/storage'

let token = LocalStorage.get('token')

export default class BaseApi {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://www.fastmock.site/mock/c4333d7a4b20ab30e7b55db95563de1e/api'
    });
    if (token) {
      this.instance.defaults.headers.common['Authorization'] = token
    }
  }
}
