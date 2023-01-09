import { Metadata } from "Metadata";
import { TodoList } from "./TodoList";

//import { v4 } from "uuid";
//  if Error code: UUID not developed with JS;
// One Solution => Definitely Typed (shows community packages)
// => npm install --save-dev @types/uuid
// => import of uuid to this file later uncommented due to file structure changes (=> modules)

// & Union Type => Kombination mehrerer Typen i.e. "open" | "closed" |"discarded";
// type Status = "open" | "closed" | "discarded";

// & Generics <T>
// * auch häufig verwendet z.B. in Promises

// interface Todo<TData> {
//   description: string;
//   status: Status;
//   data: TData;
// }

// interface Metadata {
//   assignee: string;
// }

const todoList = new TodoList<Metadata>();

// <Metadata> kann theoretisch ersetzt werden
// const assigneePagolli = {
//   assignee: "@pagolli",
// };

// todoList.note("Code aufräumen", assigneePagolli);
todoList.note("Code aufräumen", { assignee: "@pagolli" });
todoList.note("UI ergänzen", { assignee: "@pagolli" });

const improveErrorHandlingId = todoList.note("Felerbehebung verbessern", {
  assignee: "@pagolli",
});

todoList.edit(improveErrorHandlingId, "Felerbehebung verbessern");
todoList.tickOff(improveErrorHandlingId);

const showOpenTodos = function (todoList: TodoList<unknown>) {
  console.log(todoList.getOpenTodos());
};

showOpenTodos(todoList);

// const singleton = { foo: "bar" };

console.log(todoList.getOpenTodos());

// $ Entwurf => wurde ersetzt durch todoList.note(...)
// const todo: Todo<Metadata> = {
//   id: v4(),
//   description: "TypeScript lernen",
//   status: "open",
//   data: {
//     assignee: "opagel",
//   },
// };
