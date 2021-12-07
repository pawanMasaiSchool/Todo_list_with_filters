import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ myTodos, handleDelete, handleStatus }) {
  // console.log(myTodos);
  return (
    <div>
      {myTodos.map((item) => {
        return (
          <TodoItem
            description={item.description}
            title={item.title}
            status={item.status}
            handleDelete={handleDelete}
            id={item.id}
            key={item.id}
            handleStatus={handleStatus}
          />
        );
      })}
    </div>
  );
}
