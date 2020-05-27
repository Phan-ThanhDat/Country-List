import { nativeName } from './pages/Country/Country'

// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const FETCH_COUNTRIES_REQUESTED = 'FETCH_COUNTRIES_REQUESTED'
export const FETCH_COUNTRIES_FAILED = 'FETCH_COUNTRIES_FAILED'
export const FETCH_COUNTRIES_SUCCEEDED = 'FETCH_COUNTRIES_SUCCEEDED'
// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type Countries = {
  name: string
  flag: string
  population: number
  languages: nativeName[]
  region: string
}

export type FetchCountriesRequestedAction = {
  type: typeof FETCH_COUNTRIES_REQUESTED
}

export type FetchCountriesSucceededAction = {
  type: typeof FETCH_COUNTRIES_SUCCEEDED
  payload: {
    countries: []
  }
}

export type FetchCountriesFailedAction = {
  type: typeof FETCH_COUNTRIES_FAILED
  payload: {
    error: { message: string }
  }
}

export type CountriesActions =
  | FetchCountriesRequestedAction
  | FetchCountriesSucceededAction
  | FetchCountriesFailedAction

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type CountriesState = {
  inCart: []
  countries: Countries[]
  loading: boolean
}

export type AppState = {
  product: ProductState
  ui: UiState
  list: CountriesState
}
