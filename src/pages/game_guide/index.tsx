import React, { useState } from 'react'
import { ReduxProps, ReduxState } from '../../redux/interface'
import { Image, StyleSheet, View } from 'react-native'
import Toast from '../../components/Toast'
import Button from '../../components/Button'
import { connect } from 'react-redux'
import { LocalStorage } from '../../common/storage'
import { requestTokenVerification } from '../../redux/login/actions'
import LottieView from "lottie-react-native"
import { selectLoginState } from '../../redux/selector'
import { LoginState } from '../../redux/login/reducer'
import Loading from '../../components/loading'
import { Actions } from 'react-native-router-flux'
import { ENTER_PROFILE, LOGIN, HOME } from '../../common/scenes'

interface Props extends ReduxProps{
  loginState: LoginState
}

function mapStateToProps (state: ReduxState) {
  return {
    loginState: selectLoginState(state)
  }
}

const GameGuide:React.FC<Props> = ({dispatch, loginState}) => {

  React.useEffect(() => {
    autoLogin().then()
  }, [])

  const autoLogin = async () => {
    let token = await LocalStorage.get('token')
    if (token) {
      dispatch(requestTokenVerification({token}))
      Toast.show('正在自动登录...')
    }
  }

  return(
    <View style={styles.container}>
      <Image source={require('../../../images/guide_title.png')}
             style={{width: '100%', marginTop: 16}}
      >
      </Image>
      {loginState.loginIn ?
        loginState.isFirstEnter ? (
          <Button title={'进入游戏'}
                  onPress={() => {Actions[ENTER_PROFILE]()}}
                  buttonContainerStyle={{width:200}}
          >
          </Button>
        ) : (
          <Button title={'进入游戏'}
                  onPress={() => {Actions[HOME]()}}
                  buttonContainerStyle={{width:200}}
          >
          </Button>
        ) : (
        <Button title={'使用云家园账号登录'}
                onPress={() => {Actions[LOGIN]()}}
                buttonContainerStyle={{width:200}}
        >
        </Button>
      )}
      <LottieView
        style={{width: '100%'}}
        source={require('../../../images/game_guide.json')}
        autoPlay
        loop
      />
      <Loading loading={loginState.isLogging}/>
      <Toast/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
})

export default connect(mapStateToProps)(GameGuide)
