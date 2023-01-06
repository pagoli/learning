let x: Record<string, string | number | boolean | Function> = {
  name: "Wruce Bayne",
};
x.number = 1234;
x.active = true;
x.log = () => console.log("awesome!");

type ContactStatus = "active" | "inactive" | "new";

interface Address {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact {
  id: number;
  name: string;
  status: ContactStatus;
  address: Address;
  email: string;
}

interface Query {
  sort?: "asc" | "desc";
  matches(val): boolean;
}

// $ Partial Helper Type
// & PARTIAL
// => creates a new Type that defines all of its types as OPTIONAL
// type ContactQuery = Partial<Record<keyof Contact, Query>>;

// & OMIT
// Contrary: Omit => restricts usage of certain properties
// i.e. never allow queries on the Address property of the contact class
// type ContactQuery = Omit<
//   Partial<Record<keyof Contact, Query>>,
//   "address" | "status"
// >;

// & PICK
//  => to limit the properties I want to access
type ContactQuery = Partial<Pick<Record<keyof Contact, Query>, "id" | "name">>;

// & REQUIRE
// => all properties are required
type RequiredContactQuery = Required<ContactQuery>;

function searchContacts(contacts: Contact[], query: ContactQuery) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact)[]) {
      // get the query object for this property
      const propertyQuery = query[property];
      // check to see if it matches
      if (propertyQuery && propertyQuery.matches(contact[property])) {
        return true;
      }
    }

    return false;
  });
}

const filteredContacts = searchContacts(
  [
    /* contacts */
  ],
  {
    id: { matches: (id) => id === 123 },
    name: { matches: (name) => name === "Carol Weaver" },
  }
);
