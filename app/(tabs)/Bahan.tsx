import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BahanPage = () => {
  return (
    <View style={styles.contaner}>
      <Text>BahanPage</Text>
    </View>
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