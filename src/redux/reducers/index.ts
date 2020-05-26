import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import list from './countries'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    list,
  })

export default createRootReducer
