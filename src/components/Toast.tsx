import React, { useState } from 'react'
import { Animated, View, StyleSheet, Text, LayoutChangeEvent, Dimensions } from 'react-native'

interface Props {
}

interface Func extends React.FC{
  show: (inlineText: string) => void
}

const screenHeight = Math.round(Dimensions.get('window').height);

//@ts-ignore
const Toast: Func = () => {
  const [fadeAnim] = useState(new Animated.Value(0))
  const [inlineText, setInlineText] = useState('提示')
  const [animateRunning, setAnimateRunning] = useState(false)

  Toast.show = (inlineText: string) => {
    if (animateRunning) {
      return
    }
    setInlineText(inlineText)
    setAnimateRunning(true)
    Animated.timing(                  // 随时间变化而执行动画
      fadeAnim,                       // 动画中的变量值
      {
        toValue: .8,                   // 透明度最终变为1，即完全不透明
        duration: 500,              // 让动画持续一段时间
      }
    ).start();
    setTimeout(() => {
      Animated.timing(                  // 随时间变化而执行动画
        fadeAnim,                       // 动画中的变量值
        {
          toValue: 0,                   // 透明度最终变为0，即完全透明
          duration: 500,              // 让动画持续一段时间
        }
      ).start();
      setAnimateRunning(false)
    }, 1500)
  }

  return (
    <View style={styles.animateContainer}>
      <Animated.View style={[{opacity: fadeAnim}, styles.textContainer]}>
        <Text>{inlineText}</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 15
  },
  animateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    top: screenHeight/2 - 15
  }
})

export default Toast
