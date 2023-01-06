interface Todo {
  description: string;
  status: string;
  assignee?: string;
}

//          Typ-Annotation
const todo: Todo = {
  description: "TypeScript lernen",
  status: "open",
  assignee: "goloroden",
};

// Function                                        Rückgabewert Typ des Ergebnisses
const add = function (left: number, right: number): number {
  return left + right;
};

// void => Funktion gibt "nichts"(undefined in JS) zurück;
// void => wenn Funktion keinen Rückgabewert(return value) hat
// value unknown when mehrere Möglichkeiten existieren als parameter, aber keine genauerern Angaben möglich sind.
// Hier in Bspl. z.B. string, number, function etc. möglich
const printSth = function (value: unknown): void {
  // ...
};
// never => führt zu Programmabbruch und wirft eine Exception

// let text = "Hallo Welt!"; // erkennt hier automatisch den Typ
// console.log(text);
