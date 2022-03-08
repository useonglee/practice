import React from "react";

function List({ tasks, onClick }) {
  if (tasks.length === 0) {
    return <p>아무것도 안하는 중</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button type="button" onClick={() => onClick(task.id)}>
            완료
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
