import React from 'react'
import { View, ViewStyle, Button, StyleSheet, ButtonProps } from 'react-native'

interface Props extends ButtonProps{
  buttonCenterContainerStyle?: ViewStyle
  buttonContainerStyle?: ViewStyle
}

const aButton: React.FC<Props> = ({title, onPress, buttonCenterContainerStyle, buttonContainerStyle}) => {
  return (
    <View style={[styles.buttonCenterContainer, buttonCenterContainerStyle]}>
      <View style={[styles.buttonContainer, buttonContainerStyle]}>
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
    alignItems: 'center'
  }
})

export default aButton
