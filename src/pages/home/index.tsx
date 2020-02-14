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
import TaskList from './task_list'
import Overview from './overview'
import MyProfile from './my_profile'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const Home = () => {

  return (
    <View style={styles.homePage}>
      <PageChanger>
        <View style={styles.slide}>
          <HomeMap>
          </HomeMap>
        </View>
        <View style={styles.slide}>
          <TaskList>
          </TaskList>
        </View>
        <View style={styles.slide}>
          <Overview>
          </Overview>
        </View>
        <View style={styles.slide}>
          <MyProfile/>
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
  slide: {
    flex: 1,
  }
})

export default Home
