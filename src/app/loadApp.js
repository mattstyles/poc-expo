
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'

import { LayoutCenter } from '../ui/layout'
import { Text } from '../ui/text'

const LoadingModal = () => {
  return (
    <LayoutCenter>
      <Text>Loading...</Text>
    </LayoutCenter>
  )
}

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
    return <LoadingModal />
  }

  return children
}
