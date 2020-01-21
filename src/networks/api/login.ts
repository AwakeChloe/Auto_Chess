import BaseApi from '../base_api'
import { ILogin } from '../interfaces/login'
import axios from 'axios'

class LoginApi extends BaseApi {
  constructor() {
    super();
  }

  private urls = {
    login: '/login'
  }

  login = async (studentId: number, password: string) => {
    let result: any = await axios.post<ILogin>('https://os.ncuos.com/api/user/token', {
      username: studentId,
      password: password
    })
    if (!result.data.status) {
      return {
        data: {
          msg: result.data.message,
          status: 0
        }
      }
    }
    if (result.data.token) {
      let gameProfile: any = await axios.get('https://os.ncuos.com/api/user/profile/school_roll', {
        headers: {
          authorization: `passport ${result.data.token}`
        }
      })
      let nameResult: any = await axios.get('https://os.ncuos.com/api/user/profile/basic', {
        headers: {
          authorization: `passport ${result.data.token}`
        }
      })
      return await this.instance.post<ILogin>(this.urls.login, {
        token: result.data.token,
        profession: gameProfile.data.school_roll[0].bjmc,
        collage: gameProfile.data.school_roll[0].xy,
        name: nameResult.data.base_info.xm
      })
    }
  }
}

const loginApi = new LoginApi()

export default loginApi
