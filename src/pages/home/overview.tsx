import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListItem from '../../components/List_item'

const screenWidth = Math.round(Dimensions.get('window').width)

const Overview: React.FC = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Text style={styles.titleText}>总览</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>
          <ListItem inlineTextName={'test'}
                    inlineTextScore={100}
          >
          </ListItem>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 24,
    fontSize: 31,
    fontWeight: 'bold',
    color: '#333333'
  },
  container: {
    height: '65%',
    margin: 24,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1
  }
})

export default Overview
