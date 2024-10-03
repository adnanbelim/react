import { TodoProvider } from './contexts';
import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // prev take all array. (...prev it is a spread function which present all data in prev)
    // ...todo is spread function represent other keys in todo like todo and complete.
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    // prev represent all data in todolist and match id using filter if id match any todo id in prev then update otherwise value will remain same
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  const deleteTodo = (id) => {
    // use filter method which id not match, then remain in list, match id will remove 
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    // if id match then complete value will toggle. true => false and false => true
    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo))
  }

  // Basic todo functionality end

  // LocalStorage functionality

  // get item from localStorage and Convert into JSON
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  

  // setTime in localStorage and convert into string
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])





  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App