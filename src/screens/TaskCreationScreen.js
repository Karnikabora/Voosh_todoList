const TaskCreateScreen = ({ navigation }) => {
  const [taskName, setTaskName] = useState("");

  const handleCreateTask = () => {
    // TODO: Implement the logic to create a new task with the provided name
  };

  return (
    <View>
      <Text>Create Task</Text>
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
};

export default TaskCreateScreen;
