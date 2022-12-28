import { Header } from './components/Header';
import { NewTodo } from './components/NewTodo';
import { Todo } from './components/Todo';
import { TodoInfo } from './components/TodoInfo';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import styles from './App.module.css';

interface TodoProps {
  id: string;
  title: string;
  isDone: boolean;
}

const initialTodos: TodoProps[] = [
  {
    id: uuid(),
    title: 'Terminar o desafio',
    isDone: true,
  },
  {
    id: uuid(),
    title: 'Aprimorar a aplicação do desafio',
    isDone: false,
  },
  {
    id: uuid(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isDone: false,
  },
];

export function App() {
  const [todos, setTodos] = useState(initialTodos);

  const todosFinishedCount = todos.reduce((todosFinished, currentTodo) => {
    if (currentTodo.isDone) {
      todosFinished += 1;
    }
    return todosFinished;
  }, 0);

  function handleTodoStatusChange(id: string) {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            isDone: !todo.isDone,
          }
        : todo,
    );

    setTodos(newTodos);
  }

  function handleDeleteTodo(id: string) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function handleCreateNewTodo(title: string) {
    const newTodo: TodoProps = {
      isDone: false,
      id: uuid(),
      title,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <NewTodo onCreateNewTodo={handleCreateNewTodo} />
        <div className={styles.wrapper}>
          <TodoInfo todosFinishedCount={todosFinishedCount} todosTotalCount={todos.length} />
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              isDone={todo.isDone}
              title={todo.title}
              onChangeTodoStatus={handleTodoStatusChange}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </div>
      </main>
    </>
  );
}
