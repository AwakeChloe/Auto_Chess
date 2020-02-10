import { Dimensions, Image, StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { colors } from '../common/color'
import { shadowDefault } from '../common/styles'

interface Props extends ViewProps{
  level: number,
  score: number
}

const MapHeader: React.FC<Props> = ({level, score}) => {

  return (
    <View style={styles.headContainer}>
      <View style={styles.levelAndScoreContainer}>
        <Text style={styles.inlineText}>等级</Text>
        <Text style={styles.inlineText}>{level}</Text>
      </View>
      <View style={styles.levelAndScoreContainer}>
        <Text style={styles.inlineText}>声望贡献值</Text>
        <Text style={styles.inlineText}>{score}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    width: '100%',
    backgroundColor: colors.light,
    zIndex: 1,
    ...shadowDefault
  },
  levelAndScoreContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineText: {
    fontSize: 15,
    margin: 16,
    color: 'black'
  }
})

export default MapHeader
