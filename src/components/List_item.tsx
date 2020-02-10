import { Dimensions, Image, StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { colors } from '../common/color'

interface Props extends ViewProps{
  inlineTextName: string
  inlineTextScore: number
}

const ListItem: React.FC<Props> = ({inlineTextName, inlineTextScore}) => {

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.inlineTextName}>
        {inlineTextName}
      </Text>
      <Text style={styles.inlineTextScore}>
        {inlineTextScore}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginTop: 14,
    borderRadius: 16,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineTextName: {
    fontSize: 15,
    margin: 16,
    color: 'white'
  },
  inlineTextScore: {
    fontSize: 15,
    margin: 16,
    color: 'white'
  },
})

export default ListItem
