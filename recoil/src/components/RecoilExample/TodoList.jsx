import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStates from "./TodoListStats";
import { filteredTodoListState, todoListState } from "../../store/todo";

function TodoList() {
  //   const todoList = useRecoilValue(todoListState);

  //   return (
  //     <div>
  //       <TodoItemCreator />
  //       {todoList.map((item) => (
  //         <TodoItem key={item.id} item={item} />
  //       ))}
  //     </div>
  //   );
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStates />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}

export default TodoList;
