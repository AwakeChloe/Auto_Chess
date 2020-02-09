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
  Dimensions, PanResponder
} from 'react-native'
import BottomNavigationBar from '../../components/Bottom_navigation_bar'
import HomeMap from './home_map'
import PageChanger from '../../components/PageChanger'
import Toast from '../../components/Toast'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const Home = () => {

  return (
    <View style={styles.homePage}>
      <PageChanger>
        <View style={styles.slide1}>
          <HomeMap>
          </HomeMap>
        </View>
        <View style={styles.slide2}>
        </View>
        <View style={styles.slide3}>
        </View>
        <View style={styles.slide4}>
        </View>
      </PageChanger>
      <BottomNavigationBar>
      </BottomNavigationBar>
      <Toast/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
  },
  homePage: {
    height: '100%'
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
    backgroundColor: '#e5454a',
  },
  slide3: {
    flex: 1,
    backgroundColor: '#2259d9',
  },
  slide4: {
    flex: 1,
    backgroundColor: '#d027d9',
  }
})

export default Home
