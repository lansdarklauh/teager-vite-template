import axios from 'axios'
import { resResolve, resReject, reqResolve, reqReject } from './request'

let defAxios = null

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 60000,
    headers: {},
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  defAxios = service
}

export const getAxios = () => {
  return defAxios
}
