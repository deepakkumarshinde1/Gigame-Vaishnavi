import React, { useState } from "react";

type Todo = {
  name: string;
  isCompleted: boolean;
};
function Header() {
  let [todoText, setTodoText] = useState("");
  let [todoList, setTodoList] = useState<Todo[]>([]);

  let updateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoText(event.target.value);
  };

  let saveTodo = (): void => {
    let newTodo: Todo = {
      isCompleted: false,
      name: todoText,
    };
    let _todoList: Todo[] = [...todoList];
    _todoList.push(newTodo);
    setTodoList(_todoList);
  };

  return (
    <>
      <input type="text" value={todoText} onChange={updateInput} />
      <button onClick={saveTodo}>Click</button>

      {todoList.map((value: Todo, index: number) => {
        return (
          <li key={index}>
            {value.name} ({value.isCompleted ? "Yes" : "No"})
          </li>
        );
      })}
    </>
  );
}

export default Header;
