import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
      onPress={handleSignout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

// '?' on line 8 is so it doesn't crash if email is undefined

export default HomeScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
      backgroundColor: '#0782F9',
      width: '50%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40
  },
  buttonText: {
      color: 'white',
      fontWeight: 700,
      fontSize: 16
  },
})