import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './NewTodo.module.css';

interface NewTodoProps {
  onCreateNewTodo: (title: string) => void;
}

export function NewTodo({ onCreateNewTodo }: NewTodoProps) {
  const [newTodo, setNewTodo] = useState('');

  function handleCreateNewTodo() {
    onCreateNewTodo(newTodo);
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  return (
    <div className={styles.newTodo}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTodoChange}
      />
      <button className={styles.button} onClick={handleCreateNewTodo}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  );
}
