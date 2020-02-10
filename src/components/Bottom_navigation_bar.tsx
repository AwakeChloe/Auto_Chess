import React, { Component } from 'react'
import {
  ScrollView,
  Image,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  NativeTouchEvent,
  GestureResponderEvent,
  Dimensions, PanResponder,
} from 'react-native'
import Button from './Button'
import pageChanger from './PageChanger'

const BottomNavigationBar: React.FC = () => {

  return (
    <View style={styles.container}>
      <Button title={'地图'}
              onPress={() => {pageChanger.changePage(0)}}
              buttonContainerStyle={styles.changePageButton}
              buttonCenterContainerStyle={{flex: 1}}
      >
      </Button>
      <Button title={'任务'}
              onPress={() => {pageChanger.changePage(1)}}
              buttonContainerStyle={styles.changePageButton}
              buttonCenterContainerStyle={{flex: 1}}
      >
      </Button>
      <Button title={'纵览'}
              onPress={() => {pageChanger.changePage(2)}}
              buttonContainerStyle={styles.changePageButton}
              buttonCenterContainerStyle={{flex: 1}}
      >
      </Button>
      <Button title={'我的'}
              onPress={() => {pageChanger.changePage(3)}}
              buttonContainerStyle={styles.changePageButton}
              buttonCenterContainerStyle={{flex: 1}}
      >
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    height: 60
  },
  changePageButton: {
    flex: 1,
    height: '100%',
    borderRadius: 0
  }
})

export default BottomNavigationBar
