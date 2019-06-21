//  api
let { request } = require('../util/request')

let userApi = {
  login: (params)=> request.post(`/login`, params),
  userInfo: ()=> request.get(`/info`),
}

module.exports = {
  userApi
}