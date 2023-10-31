import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const NewTaskForm = ({ onCreateTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleCreateTask = () => {
    onCreateTask(taskName);
    setTaskName("");
  };

  return (
    <View>
      <Text>New Task Form</Text>
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
};

export default NewTaskForm;
