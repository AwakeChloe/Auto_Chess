import React from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps, StyleProp, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

interface Props extends TextInputProps{
  containerStyle?: StyleProp<ViewStyle>
}

const Input: React.FC<Props> = ({ placeholder,
                                  keyboardType,
                                  style,
                                  containerStyle}) => {
  return(
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 37,
    backgroundColor: '#e9e9e9',
    borderRadius: 5
  },
  input: {
    padding: 0,
    fontSize: 14,
    paddingLeft: 9,
    flex: 1,
  }
})

export default Input
