let y: Record<string, string | number | boolean | Function> = {
  name: "Wruce Bayne",
};
y.number = 1234;
y.active = true;
y.log = () => console.log("awesome!");

type ContactStatus4 = "active" | "inactive" | "new";

interface Address4 {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact {
  id: number;
  name: string;
  status: ContactStatus4;
  address: Address4;
  email: string;
}

interface Query<TProp> {
  sort?: "asc" | "desc";
  matches(val: TProp): boolean;
}

// type ContactQuery = Partial<Record<keyof Contact, Query>>;

// $ Mapper Type
type ContactQuery4 = {
  [TProp in keyof Contact]?: Query<Contact[TProp]>;
};

function searchContacts(contacts: Contact[], query: ContactQuery4) {
  return contacts.filter((contact) => {
    for (const property of Object.keys(contact) as (keyof Contact)[]) {
      const propertyQuery = query[property] as Query<Contact[keyof Contact]>;
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
