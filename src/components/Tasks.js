import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToogleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          onToogleReminder={onToogleReminder}
          key={task.id}
          task={task}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};

export default Tasks;
