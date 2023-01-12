class InMemoryStore {
  constructor() {
    // Intentionally left blank.
  }

  async initialize() {
    this.todos = [];
  }

  async noteTodo({ todo }) {
    this.todos.push(todo);
  }

  async markTodoAsDone({ id }) {
    const todo = this.todos.find((todo) => todo.id === id);
    // undefined = falsy
    if (!todo) {
      return new Error("Todo not found.");
    }
    todo.status = "done";
    return `${todo.description} marked as done.`;
  }

  async getRemainingTodos() {
    return this.todos.filter((todo) => todo.status === "open");
  }

  async getDoneTodos() {
    return this.todos.filter((todo) => todo.status === "done");
  }
}

export { InMemoryStore };
