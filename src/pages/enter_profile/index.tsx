import React, { useState } from 'react'
import {View, StyleSheet, Text, Animated} from 'react-native'
import { connect } from 'react-redux'
import { ReduxProps, ReduxState } from '../../redux/interface'
import { selectLoginState } from '../../redux/selector'
import { LoginState } from '../../redux/login/reducer'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {requestQuery} from '../../redux/enter_profile/actions'
import Toast from '../../components/Toast'

interface Props extends ReduxProps{
  loginState: LoginState
}

const mapStateToProps = (state: ReduxState) => {
  return {
    loginState: selectLoginState(state)
  }
}

const EnterProfile: React.FC<Props> = ({loginState, dispatch}) => {
  let name: string = ''

  const queryName = () => {
    console.log(name)
    dispatch(requestQuery({name}))
  }

  const enterGame = () => {

  }

  return (
    <View>
      <Text style={styles.baseText}>你的专业班级:{loginState.profession}</Text>
      <Text style={styles.baseText}>你的学院:{loginState.college}</Text>
      <View>
        <Text style={styles.baseText}>填写你的昵称:</Text>
        <Input placeholderTextColor="#acacac"
               onChangeText={text => name = text}
        />
      </View>
      <Button title={'确认信息并进入游戏'} onPress={queryName}>
      </Button>
      <Toast/>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 16
  }
});

export default connect(mapStateToProps)(EnterProfile)
