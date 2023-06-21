import { View, StatusBar } from 'react-native'
import React from 'react'
import Router from './src/navigation/Router.jsx'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#9ee4d4' barStyle='dark-content' />
      <Router />
    </>
  )
}

export default App