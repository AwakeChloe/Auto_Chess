import axios from 'axios'
import { AxiosInstance } from 'axios'
import { LocalStorage } from '../common/storage'
import Toast from '../components/Toast'
import { Actions } from 'react-native-router-flux'
import { LOGIN } from '../common/scenes'

export default class BaseApi {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 3000
    });
    this.instance.interceptors.request.use( async (config) => {
      config.headers.Authorization = await LocalStorage.get('token')
      return config
    })
    this.instance.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        Toast.show('验证已过期,请重新登录')
        setTimeout(() => {
          Actions[LOGIN]()
        }, 1000)
      } return
    });
  }
}
