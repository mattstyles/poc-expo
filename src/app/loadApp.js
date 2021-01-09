
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

// see https://docs.expo.io/guides/preloading-and-caching-assets/
export const LoadApp = ({
  children
}) => {
  const [isLoaded] = useFonts({
    'Hasklig-Medium': require('../../assets/fonts/Hasklig-Medium.otf')
  })
  const [isWaiting, setIsWaiting] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsWaiting(false)
    }, 300)
    return () => {
      clearTimeout(timeout)
    }
  })

  if (!isLoaded || isWaiting) {
    return <AppLoading />
  }

  return children
}
