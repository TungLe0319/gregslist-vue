import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  
  /**@type {import('./models/Car').Car[]} */
  cars:[],
  
  /**@type {import('./models/House').House[]} */
  houses:[],

  /**@type {import('./models/Job').Job[]} */
  jobs:[]
})
