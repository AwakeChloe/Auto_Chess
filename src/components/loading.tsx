import LottieView from 'lottie-react-native'
import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

interface Props{
  loading: boolean
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const Loading: React.FC<Props> = ({loading}) => {
  return (
    <View style={styles.centerContainer}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100
  },
  centerContainer: {
    position: 'absolute',
    left: screenWidth/2 - 50,
    top: screenHeight/2 - 138
  }
})

export default Loading
