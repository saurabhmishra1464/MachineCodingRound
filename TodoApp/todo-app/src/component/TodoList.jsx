import React, { useState } from 'react'
import '../../src/component/todolist.css';
const TodoList = () => {

    const [todo, setTodo] = useState();
    const [todolist, setTodoList] = useState([]);
    function addTodo() {
        debugger
        if (todo) {
            const todoObject = { id: Math.random(), todoName: todo }
            setTodoList((prevList) => [...prevList, todoObject]);
            setTodo('');
            console.log(todolist);
        }
    }

    function editTodo(index) {
        debugger
        const editedTodo = prompt('Edit the todo:', todolist[index].todoName); // Pre-fill with current todo
        if (editedTodo) {
            const updatedTodos = [...todolist];
            updatedTodos[index].todoName = editedTodo;
            setTodoList(updatedTodos); // Update state with the modified list
        }
    }

    function deleteTodo(index) {
        debugger
        let todeleteTodo = todolist.filter((todo) => todo.id != index);
        setTodoList(todeleteTodo);
    }

    return (
        <div className='container'>
            <div className='add-todo'>
                <input type='text' className='todoinput' value={todo} onChange={(item) => setTodo(item.target.value)} placeholder="Add Todo" />
                <button className='btn' onClick={addTodo}>Add Todo</button>
            </div>


            {todolist.map((list, index) =>
                <div key={index} className='todolist'>
                    {list.todoName}
                    <button onClick={() => deleteTodo(list.id)}>Delete</button>
                    <button onClick={() => editTodo(index)}>Edit</button>
                </div>
            )}
        </div>

    )
}

export default TodoList