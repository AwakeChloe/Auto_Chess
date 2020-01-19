import axios from 'axios'
import { AxiosInstance } from 'axios'
import { LocalStorage } from '../common/storage'

let token = LocalStorage.get('token')

export default class BaseApi {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000'
    });
    if (token) {
      this.instance.defaults.headers.common['Authorization'] = token
    }
  }
}
