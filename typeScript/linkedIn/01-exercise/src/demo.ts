// $ CUSTOM TYPES => Interfaces
//  => similar to "Classes"
//
//  => Difference:
// Interfaces only exist before TRANSPILATION
// to provide type information to TS;
//  will never be available on runtime code

interface Contact extends Address {
  // extends Address makes Address fields available in Contact interface
  id: number;
  name: ContactName;
  birthDate?: Date; // ? => OPTIONAL
  status?: ContactStatus;
  // method:
  clone?(name: string): Contact; // similar to the function below, but without the arrow;
}

interface Address {
  line1?: string;
  line2?: string;
  province?: string;
  region?: string;
  postalCode?: number;
}

// & TYPE ALIAS
// => provides an alias for an already existing type;

type ContactName = string; // replaces here the "name" inside of Contact interface

// & ENUMERABLE TYPES
// & special Type of values with hard coded list of values
//  => i.e. for statuses (active, inactive, new...)

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new",
}

let primaryContact: Contact = {
  birthDate: new Date("01-01-2015"),
  id: 23456,
  name: "Hon Duras",
  postalCode: 123456,
  status: ContactStatus.Inactive,
};
//            parameter         value
function clone(source: Contact): Contact {
  // func: (source: Contact) => Contact (=> is a function signature, possible to add inside the parameters)
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer S" };
//  b
const b = clone(a);

// $ GENERICS <T>
// - a metatype (representing any type) that you might want to substitute
// - allows you to replace both references with a placeholder, each time the function is used
// - can also be applied to interfaces and classes

function cloneGen<T>(source: T): T {
  return Object.apply({}, source);
}

const aG: Contact = { id: 123, name: "Homer S" };
//  b
const bG = cloneGen(aG);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = cloneGen(dateRange);

function cloneGenMulti<T1, T2>(source: T1): T2 {
  return Object.apply({}, source);
}

const aGs: Contact = { id: 123, name: "Homer S" };
// const bGs = cloneGenMulti<Contact, Contact>(aGs);
const bGs = cloneGenMulti<Contact, Date>(aGs);

// $ GENERIC CONSTRAINTS
//  => other way to define generics, as it allows a stricter use;

interface UserContact {
  id: number;
  name: string;
  username: string;
}

//                          with the extends, the T2 needs to match the properties of T1
function cloneGenCon<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
}

const aGC: Contact = { id: 123, name: "Homer S" };
const bGC = cloneGenMulti<Contact, UserContact>(aGC);

// $ Generic interface

interface UserContact2<TExternalId> {
  id: number;
  name: string;
  username: string;
  externalId: TExternalId; // can be used to refer to it either as type of a property or
  loadExternalId(): Task<TExternalId>; //a generic parameter to another interface
}
