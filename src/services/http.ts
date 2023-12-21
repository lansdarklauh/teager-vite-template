import axios from 'axios'
import { tokenRef } from '@/services/token'
import { resResolve, resReject, reqResolve, reqReject } from './request'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 60000,
    headers: {
      'edger-token': tokenRef.token,
      'edger-srand': tokenRef.srand,
    },
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export const defAxios = createAxios()
