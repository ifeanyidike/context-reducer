import { useReducer, useState } from "react";
import "./App.css";
import todoReducer, { ADD_TODO } from "./todoReducer";
import TodoContext from "./todoContext";
import ThemeContext from "./themeContext";
import TodoList from "./TodoList";
import themeReducer, { DARK, LIGHT } from "./themeReducer";
import Colors from "./colors";
import ThemeToggler from "./ThemeToggler";

export default function App() {
  const [id, setId] = useState(0);
  const [text, setText] = useState("");

  const initialState = [];

  const [todoState, todoDispatch] = useReducer(todoReducer, initialState);
  const [themeState, themeDispatch] = useReducer(themeReducer, Colors.light);

  const addTodoItem = (e) => {
    e.preventDefault();
    const newId = id + 1;
    setId(newId);
    todoDispatch({
      type: ADD_TODO,
      id: newId,
      text: text
    });

    setText("");
  };
  return (
    <TodoContext.Provider value={[todoState, todoDispatch]}>
      <ThemeContext.Provider
        value={[
          themeState,
          () => themeDispatch({ type: LIGHT }),
          () => themeDispatch({ type: DARK })
        ]}
      >
        <div className="app" style={{ ...themeState }}>
          <ThemeToggler />
          <h1>Todo Example</h1>
          <form className="input" onSubmit={addTodoItem}>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button disabled={text.length === 0} type="submit">
              +
            </button>
          </form>
          <TodoList />
        </div>
      </ThemeContext.Provider>
    </TodoContext.Provider>
  );
}
