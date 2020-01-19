import BaseApi from '../base_api'
import {ILogin} from '../interfaces/login'

class LoginApi extends BaseApi {
  constructor() {
    super();
  }

  private urls = {
    login: '/login'
  }

  login = async (studentId: number, password: string) => {
    return await this.instance.post<ILogin>(this.urls.login, {studentId, password})
  }
}

const loginApi = new LoginApi()

export default loginApi
