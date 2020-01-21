import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface Props {
  college: string
  profession: string
}

const EnterProfile: React.FC<Props> = ({profession, college}) => {

  return (
    <View>
      <Text>你的专业班级:{profession}</Text>
      <Text>你的学院:{college}</Text>
    </View>
  )
}

export default EnterProfile
