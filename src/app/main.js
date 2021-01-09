
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { RecoilRoot } from 'recoil'

import { LoadApp } from './loadApp'
import { ThemeProvider, theme } from '../ui/theme'

import { Navigation } from './navigation'

export const Main = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <LoadApp>
          <Navigation />
        </LoadApp>
        <StatusBar hidden />
      </ThemeProvider>
    </RecoilRoot>
  )
}
