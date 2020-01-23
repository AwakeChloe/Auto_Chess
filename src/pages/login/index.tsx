import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Input from '../../components/Input'
import Loading from '../../components/loading'
import Button from '../../components/Button'
import Toast from '../../components/Toast'
import { connect } from 'react-redux'
import { selectLoginState } from '../../redux/selector'
import { ReduxProps, ReduxState } from '../../redux/interface'
import { LoginState } from '../../redux/login/reducer'
import { requestLogin } from '../../redux/login/actions'

interface Props extends ReduxProps {
  loginState: LoginState
}

function mapStateToProps (state: ReduxState) {
  return {
    loginState: selectLoginState(state)
  }
}

const Home: React.FC<Props> = ({dispatch, loginState}) => {
  const [studentId, setStudentId] = useState()
  const [password, setPassword] = useState()

  const login = () => {
    if (loginState.isLogging) {
      return
    }
    if (!studentId || !password) {
      Toast.show('请输入学号/密码')
      return
    }
    dispatch(requestLogin({ studentId, password }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>家园梦</Text>
      <View style={styles.inputContainer}>
        <Input containerStyle={{marginBottom: 16}}
               placeholder={'学号'}
               keyboardType={"numeric"}
               placeholderTextColor="#acacac"
               onChangeText={(text) => setStudentId(Number(text))}
        />
        <Input placeholder={'身份证后六位'}
               secureTextEntry={true}
               placeholderTextColor="#acacac"
               onChangeText={(text) => {setPassword(text)}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'登录'}
                onPress={login}
                containerWidth={200}
        >
        </Button>
      </View>
      <Loading loading={loginState.isLogging}/>
      <Toast/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 40
  },
  loginText: {
    fontSize: 31,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#333333'
  },
  container: {
    paddingTop: 44,
    zIndex: 999,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps)(Home)
