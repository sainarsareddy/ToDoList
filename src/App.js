import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm";
import ToDo from "./Components/ToDo";
import UpdateForm from "./Components/UpdateForm";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeTask = (e) => {
    let updatedEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(updatedEntry);
  };

  const updateTask = () => {
    let filteredObjects = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filteredObjects, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="container App">
      <br />
      <h2>ToDoList App (ReactJS)</h2>
      <br />
      {updateData && updateData ? (
        <UpdateForm
          changeTask={changeTask}
          setUpdateData={setUpdateData}
          cancelUpdate={cancelUpdate}
          updateTask={updateTask}
          updateData={updateData}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {toDo && toDo.length ? "" : "No Tasks..."}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
