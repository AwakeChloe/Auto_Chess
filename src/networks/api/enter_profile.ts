import BaseApi from '../base_api'
import { IQuery } from '../interfaces/enter_profile'

class QueryProfile extends BaseApi {
  constructor() {
    super();
  }

  private urls = {
    login: '/query'
  }

  query = async (gameId: string) => {
    return await this.instance.post<IQuery>(this.urls.login, {gameId})
  }
}

let queryProfile = new QueryProfile()

export default queryProfile
