import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const HomeMap: React.FC = () => {
  return(
    <View>
      <View style={styles.imageContainer}>
        <Image source={require('../../../images/map.png')}
               style={styles.image}
        >
        </Image>
        <View style={styles.testClip}>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
  },
  image: {
    width: screenWidth,
    height: screenWidth / 1422 * 1490
  },
  testClip: {
    width: 100,
    height: 100,
  }
})

export default HomeMap
