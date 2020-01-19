import React from 'react'
import { View, ViewStyle, Button, StyleSheet, ButtonProps } from 'react-native'

interface Props extends ButtonProps{
  containerWidth?: number
  containerHeight?: number
}

const aButton: React.FC<Props> = ({title, onPress, containerHeight,containerWidth}) => {
  return (
    <View style={[styles.buttonContainer, { width: containerWidth, height: containerHeight }]}>
      <Button title={title} onPress={onPress}>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#d5ff3e',
    width: 100,
    height: 35,
    borderRadius: 15
  }
})

export default aButton
