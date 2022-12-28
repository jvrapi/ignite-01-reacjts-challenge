import styles from './TodoInfo.module.css';

interface TodoInfoProps {
  todosTotalCount: number;
  todosFinishedCount: number;
}
export function TodoInfo({ todosFinishedCount, todosTotalCount }: TodoInfoProps) {
  return (
    <div className={styles.todosInfo}>
      <div className={styles.todosCount}>
        <p>Tarefas criadas</p>
        <span>{todosTotalCount}</span>
      </div>

      <div className={styles.todosFinishedCount}>
        <p>Concluídas</p>
        <div>
          {todosFinishedCount} de {todosTotalCount}
        </div>
      </div>
    </div>
  );
}
