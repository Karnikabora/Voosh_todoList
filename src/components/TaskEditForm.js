import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const TaskEditForm = ({ onSaveEdit }) => {
  const [editedTaskName, setEditedTaskName] = useState("");

  const handleSaveEdit = () => {
    onSaveEdit(editedTaskName);
    setEditedTaskName("");
  };

  return (
    <View>
      <Text>Task Edit Form</Text>
      <TextInput
        placeholder="Task Name"
        value={editedTaskName}
        onChangeText={(text) => setEditedTaskName(text)} />
      <Button title="Save Edit" onPress={handleSaveEdit} />
    </View>
  );
};

export default TaskEditForm;
