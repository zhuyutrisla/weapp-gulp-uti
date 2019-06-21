import { request } from './request'

const baseUrl = 'https://xxx.com'

export let api = {
  getTestAPI: (params: object)=> request.get(`${baseUrl}/get`, params),
  postTestAPI:(params: object)=> request.post(`${baseUrl}/post`, params),
}