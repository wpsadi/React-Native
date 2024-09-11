import { View, Text } from 'react-native'
import React from 'react'

export default function Wall({data,color="red"}) {
  return (
    <View>
      <Text>Wall</Text>
      <Text style={{color}}>{data.toString()}</Text>
    </View>
  )
}