import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 5th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    console.log("delete", id);
    const task = [...tasks].filter((t) => t.id !== id);
    setTasks(task);
  };

  //Toggle Reminder
  const toogleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, reminder: !t.reminder } : t))
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
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
