import React from "react";
import { View, Text, Button } from "react-native";

const TaskItem = ({ onDelete }) => {
  return (
    <View>
      <Text>Task Item</Text>
      {/* Display individual task details */}
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
};

export default TaskItem;
