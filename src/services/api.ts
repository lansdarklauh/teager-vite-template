import { getAxios, createAxios } from './http'

const request = getAxios()
if(request){
  request.createAxios()
}

export function example(data = {}) {
  return getAxios()({
    url: '/',
    method: 'get',
    data,
  })
}
