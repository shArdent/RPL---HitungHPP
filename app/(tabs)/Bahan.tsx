import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const BahanPage = () => {
  return (
    <ScrollView >
      <Text>banananana</Text>
    </ScrollView>
  )
}

export default BahanPage

const styles = StyleSheet.create({
    contaner : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
})