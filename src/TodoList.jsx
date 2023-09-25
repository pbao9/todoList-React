/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem";

// eslint-disable-next-line react/prop-types
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
          {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
