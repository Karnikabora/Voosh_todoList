import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation, access_token }) => {
  
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {    
    const retrieveTasksFromStorage = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        setTasks(storedTasks ? JSON.parse(storedTasks) : []);
      } catch (error) {        
        console.error('Error retrieving tasks from storage', error);
      }
    };

    retrieveTasksFromStorage();
  }, []);
  
  const handleDeleteTask = (taskId) => {    
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    
    AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));  };

  
  const handleCompleteTask = (taskId) => {    
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: true } : task
    );
    setTasks(updatedTasks);
    
    AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleTaskClick = (taskId) => {    
    navigation.navigate('TaskDetails', { taskId });
  };

  return (
    <ScrollView>
      <Text>Home Page</Text>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>{task.name}</Text>          
          <Button title="Edit" onPress={() => handleTaskClick(task.id)} />          
          <Button title="Delete" onPress={() => handleDeleteTask(task.id)} />
          
          {task.isCompleted && <Text>Task is Completed</Text>}          
          <Button title="Complete Task" onPress={() => handleCompleteTask(task.id)} />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
