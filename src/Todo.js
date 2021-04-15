import React, { useContext } from "react";
import TodoContext from "./todoContext";
import { REMOVE_TODO, COMPLETE_TODO } from "./todoReducer";

const Todo = ({ todo }) => {
    const [, dispatch] = useContext(TodoContext);
    const removeTodo = (id) => {
        dispatch({ type: REMOVE_TODO, id });
    };

    const completeTodo = (id) => {
        dispatch({ type: COMPLETE_TODO, id });
    };

    return (
        <div className="todoItem">
            <p className={todo.completed ? "strikethrough" : "nostrikes"}>
                {todo.text}
            </p>
            <span onClick={() => removeTodo(todo.id)}>&#10005;</span>
            <span onClick={() => completeTodo(todo.id)}>&#10003;</span>
        </div>
    );
};

export default Todo;
