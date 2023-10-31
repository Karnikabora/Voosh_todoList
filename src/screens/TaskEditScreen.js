const TaskEditScreen = ({ navigation, route }) => {
  const { taskId } = route.params;

  const [taskName, setTaskName] = useState("");

  const handleEditTask = () => {
    // TODO: Implement the logic to edit the task with the provided name
  };

  return (
    <View>
      <Text>Edit Task</Text>
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setTaskName(text)}
      />
      <Button title="Save Task" onPress={handleEditTask} />
    </View>
  );
};

export default TaskEditScreen;
