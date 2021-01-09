
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { RecoilRoot } from 'recoil'

import { LoadApp } from './loadApp'
import { ThemeProvider, theme } from '../ui/theme'

import { App } from './app'

export const Main = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <LoadApp>
          <App />
        </LoadApp>
        <StatusBar hidden />
      </ThemeProvider>
    </RecoilRoot>
  )
}
