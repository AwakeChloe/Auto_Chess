import LottieView from 'lottie-react-native'
import React from 'react'
import { View, StyleSheet } from "react-native";

interface Props{
  loading: boolean
}

const Loading: React.FC<Props> = ({loading}) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <LottieView
          style={styles.container}
          source={require('../../images/loading.json')}
          autoPlay
          loop
        />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100
  }
})

export default Loading
