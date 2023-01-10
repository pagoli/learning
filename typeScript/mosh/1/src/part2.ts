// $ let employee = { id: 1 };
// employee.name = "John"; // Property 'name' does not exist on type '{ id: number; } => not possible as in JS
// => TS requires the employee object to have a type annotation

// Read Only Modifier => prevents from modifying a property
// $ Best solution => create a custom type alias!

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "John",
  retire: (date: Date) => {
    console.log(date);
  },
};

// $ Union Types
// ==> allows giving a function parameter/variable more than one type

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

// $ Intersection
type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// $ Literal Types
// => limit the values we want to assign to a variable

// & Literal (exact, specific)
// let quantity: 50 | 100 = 100; // hard coded

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// $ Nullable Types
// => by default, TS strict with null & undefined values are allowed

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);
greet(undefined);

// $ Optional Chaining

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null && customer.birthday !== undefined)
// easier: Optional property access operator "?"
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.("a");
