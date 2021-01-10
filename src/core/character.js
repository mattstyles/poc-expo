
import { atom } from 'recoil'

export const char = atom({
  key: 'char',
  default: {
    health: 75,
    weapon: 'w::sword'
  }
})
