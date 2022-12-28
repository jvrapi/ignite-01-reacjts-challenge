import styles from './Todo.module.css';
import { Check, Trash } from 'phosphor-react';

interface TodoProps {
  id: string;
  title: string;
  isDone: boolean;
  onChangeTodoStatus: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export function Todo({ id, isDone, title, onChangeTodoStatus, onDeleteTodo }: TodoProps) {
  function handleTodoStatusChange() {
    onChangeTodoStatus(id);
  }

  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  return (
    <div className={`${styles.card} ${isDone ? styles.todoFinished : styles.todoUnfinished}`}>
      <div className={styles.todoWrapper}>
        <button onClick={handleTodoStatusChange}>{isDone && <Check size={20} />}</button>

        <p>{title}</p>
      </div>

      <button className={styles.deleteTodo} onClick={handleDeleteTodo}>
        <Trash size={20} />
      </button>
    </div>
  );
}
