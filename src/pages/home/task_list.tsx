import {  Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'

const screenWidth = Math.round(Dimensions.get('window').width)

const TaskList: React.FC = () => {
  return (
    <View style={{height: '100%'}}>
      <Text style={styles.titleText}>任务:</Text>
      <View style={styles.taskListContainer}>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.taskText}>今日登陆签到</Text>
            <Button buttonCenterContainerStyle={styles.buttonContainer}
                    buttonContainerStyle={styles.buttonCenterContainer}
                    title={'已完成'}
                    onPress={() => {}}
            >
            </Button>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.taskText}>早起打卡</Text>
            <Button buttonCenterContainerStyle={styles.buttonContainer}
                    buttonContainerStyle={styles.buttonCenterContainer}
                    title={'已完成'}
                    onPress={() => {}}
            >
            </Button>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.taskText}>为学院战投票</Text>
            <Button buttonCenterContainerStyle={styles.buttonContainer}
                    buttonContainerStyle={[styles.buttonCenterContainer, {backgroundColor: 'red'}]}
                    title={'未完成'}
                    onPress={() => {}}
            >
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskListContainer: {
    height: '70%',
    margin: 24,
    marginTop: 0,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1
  },
  taskText: {
    flex: 2,
    fontSize: 15,
    margin: 16,
    color: '#333333'
  },
  titleText: {
    fontSize: 31,
    fontWeight: 'bold',
    margin: 16,
    color: '#333333'
  },
  buttonContainer: {
    flex: 1,
  },
  buttonCenterContainer: {
    width: 75
  }
})

export default TaskList
