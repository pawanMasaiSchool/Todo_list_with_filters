import { useState } from "react";
import { v4 as uuid } from "uuid";
import Input from "../Input.jsx/Input";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.css";
import Button from "../Button/Button";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const handleDeleting = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          if (status === "Pending") {
            item = { ...item, status: "Done" };
          } else {
            item = { ...item, status: "Pending" };
          }
        }
        return item;
      })
    );

    setFilteredData(todos.filter((item) => item.status === "Done"));
  };
  // console.log(todos);
  //this function handles the filter which will help to show only the tasks which are done
  const handleFilter = () => {
    setShowCompleted(!showCompleted);
    console.log("filteredData", filteredData);
    return (
      <TodoList
        myTodos={filteredData}
        // handleDelete={handleDeleting}
        // handleStatus={handleStatusChange}
      />
    );
  };

  const handleCreationOfTodoElement = (name, desc) => {
    const payload = {
      id: uuid(),
      title: name,
      status: "Pending",
      description: desc
    };
    setTodos([...todos, payload]);
  };

  // console.log(todos);

  return (
    <>
      <div className={styles.myTodo}>
        <TodoList
          myTodos={todos}
          handleDelete={handleDeleting}
          handleStatus={handleStatusChange}
        />
        <br />
        <br />
        <Input CreatingTask={handleCreationOfTodoElement} />
        <br />
        <Button handleFilter={handleFilter} title={showCompleted}></Button>
      </div>
    </>
  );
}
