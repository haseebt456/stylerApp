import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <Text>
      <FlatCards /> {/*self closing is better way*/}
      </Text>
    </SafeAreaView >
  )
}

export default App