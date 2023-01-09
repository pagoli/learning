// $ Only as introduction to topic used
interface TodoIntro {
  description: string;
  status: string;
  assignee?: string;
}

//          Typ-Annotation
const todoIntro: TodoIntro = {
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
// any => "optimistische Variante"

// null & undefined:
// => beste Lösung: explizit zulassen (compilerOptions => "strict":"true")

// let text = "Hallo Welt!"; // erkennt hier automatisch den Typ
// console.log(text);

// $ Anmerkungen exports:
// mit CommonJS => module.exports / require ...
// mit nodeJS => import {} / export{}...

// & Statische Typ-Systeme:
// $ Strukturelles Typ-System => TS / Golang
// $ Nominales Typ-System => Java, C#

// & Klassen:
// im Gegensatz zu Java/c# müssen in JS
// Funktionen oder Objekte nicht in Klassen definiert werden
