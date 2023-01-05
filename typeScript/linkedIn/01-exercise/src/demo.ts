// $ CUSTOM TYPES => Interfaces
//  => similar to "Classes"
//
//  => Difference:
// Interfaces only exist before compilation
// to provide type information to TS;
//  will never be available on runtime code

interface Contact extends Address {
  // extends Address makes Address fields available in Contact interface
  id: number;
  name: ContactName;
  birthDate?: Date; // ? => OPTIONAL
  status?: ContactStatus;
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

function clone(source: Contact) {
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer S" };
