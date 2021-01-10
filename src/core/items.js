
import { atom, selector } from 'recoil'

export const weapons = atom({
  key: 'item::weapons',
  default: [
    {
      _id: 'w::sword',
      name: 'sword',
      effect: {
        attack: {
          type: 'physical',
          base: 2,
          variance: [1, 4] // 1d4 + 2
        }
      }
    }
  ]
})

export const getWeaponById = selector({
  key: 'item::weapons::get',
  get: ({ get }) => id => {
    const all = get(weapons)
    return all.find(weapon => weapon._id === id) || null
  }
})
