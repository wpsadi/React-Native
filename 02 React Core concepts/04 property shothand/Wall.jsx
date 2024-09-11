import { View, Text } from 'react-native'
import React from 'react'

export default function Wall({data}) {
  return (
    <View>
      <Text>Wall</Text>
      <Text>{data.toString()}</Text>
    </View>
  )
}