import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props{

}

const MyProfile: React.FC<Props> = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={styles.profile}>
        <View style={styles.textProfile}>
          <Text style={styles.text}>ID: </Text>
          <Text style={styles.text}>所属: </Text>
          <Text style={styles.text}>专业: </Text>
        </View>
        <View style={styles.image}>

        </View>
      </View>
      <View style={styles.skill}>
        <Text style={styles.text}>技能</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    marginTop: 50,
  },
  textProfile: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    borderRightWidth: 1,
    borderColor: 'black'
  },
  image: {
    flex: 1
  },
  text: {
    fontSize: 15,
    margin: 16,
    color: '#333333'
  },
  skill: {
    marginTop: 24,
  }
})

export default MyProfile
