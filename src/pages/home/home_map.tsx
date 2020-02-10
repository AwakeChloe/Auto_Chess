import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import MapHeader from '../../components/Map_header'

const screenWidth = Math.round(Dimensions.get('window').width)

const HomeMap: React.FC = () => {
  return (
    <View>
      <MapHeader score={1000} level={99}>
      </MapHeader>
      <View style={styles.imageContainer}>
        <Image source={require('../../../images/map.png')}
               style={styles.image}
        >
        </Image>
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
  }
})

export default HomeMap
