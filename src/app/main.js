
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { LoadApp } from './loadApp'
import { ThemeProvider, theme } from '../ui/theme'

import { App } from './app'

export const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoadApp>
        <App />
      </LoadApp>
      <StatusBar hidden />
    </ThemeProvider>
  )
}
