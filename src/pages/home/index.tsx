import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Dimensions, Button} from "react-native";
import Input from '../../components/Input'
import { connect } from 'react-redux'
import { selectLoginState } from '../../redux/selector'
import { ReduxProps, ReduxState } from '../../redux/interface'
import { requestLogin } from '../../redux/login/actions'

interface Props extends ReduxProps {
}

function mapStateToProps (state: ReduxState) {
  return {
    loginState: selectLoginState(state)
  }
}

const Home: React.FC<Props> = ({dispatch}) => {
  const [studentId, setStudentId] = useState()
  const [password, setPassword] = useState()

  const login = () => {
    dispatch(requestLogin({ studentId, password }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>家园梦</Text>
      <View style={styles.inputContainer}>
        <Input containerStyle={{marginBottom: 16}}
               placeholder={'学号'}
               keyboardType={"numeric"}
               onChangeText={(text) => {setStudentId(text)}}
        />
        <Input placeholder={'身份证后六位'}
               onChangeText={(text) => {setPassword(text)}}
        />
      </View>
      <Button title={'登录'}
              onPress={login}
      >
      </Button>
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
  }
})

export default connect(mapStateToProps)(Home)
