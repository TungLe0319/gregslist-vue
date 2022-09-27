import Axios from 'axios'
import { baseURL } from '../env'
export const sandboxServer = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 8000,
});
