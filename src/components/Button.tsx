import React from 'react'
import { View, ViewStyle, Button, StyleSheet, ButtonProps } from 'react-native'

interface Props extends ButtonProps{
  containerWidth?: number
  containerHeight?: number
}

const aButton: React.FC<Props> = ({title, onPress, containerHeight,containerWidth}) => {
  return (
    <View style={[styles.buttonContainer, { width: containerWidth, height: containerHeight }]}>
      <Button color={'white'} title={title} onPress={onPress}>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#4fb2ff',
    width: 100,
    height: 35,
    borderRadius: 30
  }
})

export default aButton
