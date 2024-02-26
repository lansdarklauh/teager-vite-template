import { getAxios } from './http'

const request = getAxios()

export function example(data = {}) {
  return request({
    url: '/mock/api/getAdress',
    method: 'get',
    data,
  })
}
