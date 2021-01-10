
import React from 'react'
import { useRecoilValue } from 'recoil'
import { Button as RNButton } from 'react-native'

import { char } from '../core/character'
import { getWeaponById } from '../core/items'

import { Page } from '../ui/layout'
import { Text } from '../ui/text'
import { Spacer } from '../ui/spacer'
import { Border } from '../ui/border'
import { Box } from '../ui/box'
import { Button } from '../ui/button'

export const EncounterView = () => {
  const character = useRecoilValue(char)
  const getWeapon = useRecoilValue(getWeaponById)

  const weapon = getWeapon(character.weapon)

  return (
    <Page>
      <Text>Encounter</Text>
      <Spacer py={16} />
      <Text>Health <Text color='cyan'>{character.health}</Text></Text>
      <Text>Weapon <Text color='green'>{weapon.name}</Text></Text>
      <Spacer py={16} />
      <Border>
        <Text>Hello world</Text>
      </Border>
      <Box row>
        <Border>
          <Text>Hello world</Text>
        </Border>
        <Border>
          <Text>Hello world</Text>
        </Border>
      </Box>
      <Spacer py={16} />
      <Button onPress={() => console.log('click')}>Click me</Button>
      <Box row>
        <Button stretch onPress={() => console.log('click')}>Attack</Button>
        <Button color='magenta' stretch onPress={() => console.log('click')}>Block</Button>
      </Box>
      <RNButton title='native button' onPress={() => console.log('native')} />
    </Page>
  )
}
