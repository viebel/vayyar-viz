import { pick } from 'ramda'

const stateKey = 'state'
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(stateKey)
    if(serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

export const saveState = (state, keys) => {
  try {
    const substate = pick(keys, state)
    const serializedState = JSON.stringify(substate)
    localStorage.setItem(stateKey, serializedState)
  } catch(err) {
  }
}
