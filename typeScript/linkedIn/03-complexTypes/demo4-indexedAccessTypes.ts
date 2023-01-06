type ContactStatus4 = "active" | "inactive" | "new";

interface Address {
  street: string;
  province: string;
  postalCode: string;
}

interface Contact {
  id: number;
  name: string;
  status: ContactStatus4;
  address: Address;
}

interface ContactEvent {
  contactId: Contact["id"]; // indexed access type does not "change" the type, but connects it
}

// $ Indexed access types

type Awesome = Contact["id"]; // matches type of Id => number
type Awesome2 = Contact["address"]["postalCode"]; // matches type of postalCode => string

interface ContactDeletedEvent extends ContactEvent {}

interface ContactStatusChangedEvent extends ContactEvent {
  oldStatus: Contact["status"];
  newStatus: Contact["status"];
}

interface ContactEvents {
  deleted: ContactDeletedEvent;
  statusChanged: ContactStatusChangedEvent;
  // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
  eventName: T,
  handler: (ect: ContactEvents[T]) => void
) {
  if (eventName === "statusChanged") {
    handler({
      contactId: 1,
      oldStatus: "active",
      newStatus: "inactive",
    });
  }
}

handleEvent("statusChanged", (evt) => evt);
