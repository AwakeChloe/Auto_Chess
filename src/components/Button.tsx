import React from 'react'
import { View, ViewStyle, Text, StyleSheet, ButtonProps, TouchableOpacity } from 'react-native'

interface Props extends ButtonProps{
  buttonCenterContainerStyle?: ViewStyle
  buttonContainerStyle?: ViewStyle
}

const Button: React.FC<Props> = ({title, onPress, buttonCenterContainerStyle, buttonContainerStyle}) => {
  return (
    <View style={[styles.buttonCenterContainer, buttonCenterContainerStyle]}>
      <TouchableOpacity
        style={[styles.buttonContainer, buttonContainerStyle]}
        onPress={onPress}
      >
        <Text style={{color: 'white'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#4fb2ff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 35,
    borderRadius: 30
  },
  buttonCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Button
