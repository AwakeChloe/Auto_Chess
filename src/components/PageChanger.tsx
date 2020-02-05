import React, { Component, ReactElement, useState } from 'react'
import {
  ScrollView,
  Image,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  NativeTouchEvent,
  GestureResponderEvent,
  Dimensions, PanResponder, Animated
} from 'react-native'
import { ReduxProps } from '../redux/interface'


interface IPageChanger extends React.FC {
  changePage: (NewIndex: number) => void
}

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
let width: number

// @ts-ignore
const pageChanger: IPageChanger = (props) => {

  const [transformX] = useState(new Animated.Value(0))
  const [numberTransformX, setNumberTransformX] = useState(0)
  const [animateRunning, setAnimateRunning] = useState(false)
  const [oldIndex, setOldIndex] = useState(0)

  pageChanger.changePage = (NewIndex: number) => {
    let transformRace = (NewIndex - oldIndex) * -screenWidth

    if (oldIndex === NewIndex || animateRunning) {
      return
    }
    setAnimateRunning(true)
    Animated.timing(
      transformX,
      {
        toValue: transformRace + numberTransformX,
        duration: 500,
      }
    ).start()
    setNumberTransformX(transformRace + numberTransformX)
    setOldIndex(NewIndex)
    setTimeout(() => {
      setAnimateRunning(false)
    }, 500)
    console.log()
  }

  const scenes = React.Children.map(props.children, child => {
    // @ts-ignore
    return React.cloneElement(child, { style: [child.props.style, { flex: 1 }] });
  });

  if (props.children) {
    // @ts-ignore
    width = props.children.length * screenWidth
  }

  return (
    <View style={{width: width, flex: 1, overflow: 'hidden'}}>
      <Animated.View style={[styles.swiperContainer,{transform: [{translateX: transformX}], width: width}]}>
        {scenes}
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  swiperContainer: {
    flex: 1,
    flexDirection: 'row',
  }
})

export default pageChanger
