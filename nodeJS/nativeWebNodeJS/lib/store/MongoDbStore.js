import { MongoClient } from "mongodb";

class MongoDbStore {
  constructor({ hostname, port, username, password, database }) {
    this.hostname = hostname;
    this.port = port;
    this.username = username;
    this.password = password;
    this.database = database;
  }

  async initialize() {
    const connectionString = `mongodb://${this.username}:${this.password}@${this.hostname}:${this.port}`;
    const client = new MongoClient(connectionString);

    // connect => async
    await client.connect();

    // db / collection => nicht async
    const database = client.db(this.database);
    const collection = database.collection("todos");

    this.collection = collection;
  }

  async noteTodo({ todo }) {
    await this.collection.insertOne(todo);
  }

  async markTodoAsDone({ id }) {
    const { modifiedAccount } = await this.collection.updateOne(
      { id },
      { $set: { status: "done" } }
    );
    if (modifiedAccount === 0) {
      throw new Error("Todo not found.");
    }
  }

  async getRemainingTodos() {
    return await this.collection
      .find({ status: "open" }, { projection: { _id: 0 } })
      .toArray();
  }

  async getDoneTodos() {
    return await this.collection
      .find({ status: "done" }, { projection: { _id: 0 } })
      .toArray();
  }
}

export { MongoDbStore };
