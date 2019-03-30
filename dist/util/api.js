//  api
let { request } = require('./request')
const baseUrl = 'https://xxx.com'

let api = {
  getTestAPI: (params)=> request.get(`${baseUrl}/get`, params),
  postTestAPI:(params)=> request.post(`${baseUrl}/post`, params),
}

module.exports = {
  api
}