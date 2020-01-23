import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { ReduxState } from '../../redux/interface'
import { selectLoginState } from '../../redux/selector'
import {LoginState} from "../../redux/login/reducer";

interface Props {
  loginState: LoginState
}

const mapStateToProps = (state: ReduxState) => {
  return {
    loginState: selectLoginState(state)
  }
}

const EnterProfile: React.FC<Props> = ({loginState}) => {

  return (
    <View>
      <Text>你的专业班级:{loginState.profession}</Text>
      <Text>你的学院:{loginState.college}</Text>
    </View>
  )
}

export default connect(mapStateToProps)(EnterProfile)
