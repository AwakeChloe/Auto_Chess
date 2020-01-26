import React from 'react'
import { View, ViewStyle, Button, StyleSheet, ButtonProps } from 'react-native'

interface Props extends ButtonProps{
  containerWidth?: number
  containerHeight?: number
  style?: ViewStyle
}

const aButton: React.FC<Props> = ({title, onPress, containerHeight,containerWidth, style}) => {
  return (
    <View style={[styles.buttonCenterContainer, style]}>
      <View style={[styles.buttonContainer, { width: containerWidth, height: containerHeight }]}>
        <Button color={'white'} title={title} onPress={onPress}>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#4fb2ff',
    width: 100,
    height: 35,
    borderRadius: 30
  },
  buttonCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export default aButton
