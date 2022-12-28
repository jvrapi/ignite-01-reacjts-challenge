export function getTodos() {
  return todos;
}

export function getTodosFinished() {
  return todos.reduce((todosFinished, currentTodo) => {
    if (currentTodo.isDone) {
      todosFinished += 1;
    }
    return todosFinished;
  }, 0);
}

export function changeTodoStatus(id: string) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  todos[todoIndex].isDone = !todos[todoIndex].isDone;
  console.log(todos[todoIndex]);
}
