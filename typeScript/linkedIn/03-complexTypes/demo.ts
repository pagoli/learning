type ContactName = string;

// enum modified to type for less code; sometimes more usefull;
type ContactStatus = "active" | "inactive" | "new";

// Pipe Syntax: | field accepts any of the types defined:
type ContactBirthDate = Date | number | string;

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
  // clone?(name: string): Contact;
}

interface Address {
  line1?: string;
  line2?: string;
  province?: string;
  region?: string;
  postalCode?: number;
}

// instead of extending the Contact with Address, we can also create a type - to combine multiple types together
// i.e. when we want to have two different types of contacts (one with address, the other without)

// Opt1: creating a new interface (however no additional field is assigned)
// interface AddressableContact extends Contact, Address{}

// Opt2:
type AddressableContact = Contact & Address; // The & combines the two types an creates a completely new one;

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  } else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate);
  } else {
    // $ TS recognizes automatically, that birthDate here must be typeof Date
    return contact.birthDate;
  }
}

let primaryContact: Contact = {
  id: 12345,
  name: "Son Diego",
  status: "active",
};
