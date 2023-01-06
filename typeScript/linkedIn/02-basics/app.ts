interface Item {
  id: number;
  title: string;
  status: ItemStatus;
  completedOn?: Date;
}

enum ItemStatus {
  Done = "done",
  InProgress = "in progress",
  Todo = "todo",
}

const todoItems: Item[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: ItemStatus.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: ItemStatus.InProgress },
  { id: 3, title: "Write the best app in the world", status: ItemStatus.Todo },
];

//            parameter             value (defined interface)
function addTodoItem(todo: string): Item {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: ItemStatus.Todo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

//      adds generic constraint to define that the parameter must be an object with a number;
function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
