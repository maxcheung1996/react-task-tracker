import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import { type } from "@testing-library/user-event/dist/type";

const App = () => {
  const [showAddTask, setShowAppTask] = useState(false);
  const [btn, setBtn] = useState({
    text: "Add",
    color: "green",
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //Add Task
  const addTask = async (task) => {
    console.log(task);
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    console.log("delete", id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const task = [...tasks].filter((t) => t.id !== id);
    setTasks(task);
  };

  //Toggle Reminder
  const toogleReminder = async (id) => {
    const taskToToogle = await fetchTasks(id);
    const updTask = { ...taskToToogle, reminder: !taskToToogle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, reminder: data.reminder } : t))
    );
  };

  //onShowAddTask
  const onShowAddTask = (showAddTask) => {
    setShowAppTask(showAddTask);
    btn.text = showAddTask ? "Close" : "Add";
    btn.color = showAddTask ? "red" : "green";
  };

  return (
    <div className="container">
      <Header
        onShowAddTask={() => onShowAddTask(!showAddTask)}
        title="Task Tracker"
        btn={btn}
      />
      {showAddTask && <AddTask onAddTask={addTask} tasks={tasks} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToogleReminder={toogleReminder}
        />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
};

export default App;
