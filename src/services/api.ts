import { defAxios as request } from '@/services/http'

export function example(data = {}) {
  return request({
    url: '/',
    method: 'get',
    data,
  })
}
