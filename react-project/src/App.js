import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';



function App() {
  let [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'learn js',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'learn css',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'learn Ract',
      isCompleted: false
    }
  ]
  );
  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ])
      }} ></TodoForm>
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id == newTodo.id) {
              return newTodo
            }
            return todo;
          }));
        }}

      ></TodoList>
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }}> </TodoFooter>
    </div>
  );
}

export default App;
