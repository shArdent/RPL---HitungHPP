import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const Page = () => {
  return (
    <View style={styles.contaner}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    contaner : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    }
})