import { createProdMockServer } from 'vite-plugin-mock/client'
import API from './api'

export function setupProdMockServer() {
    createProdMockServer([...API])
}