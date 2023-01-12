"use strict";
import cors from "cors";
import express from "express";
import { getDoneTodos } from "./routes/getDoneTodos.js";
import { getTodos } from "./routes/getTodos.js";
import { noteTodo } from "./routes/noteTodo.js";
import { markTodoAsDone } from "./routes/markTodoAsDone.js";

const getApi = function ({ store }) {
  const api = express();

  api.use(cors());
  api.use(express.urlencoded({ extended: true }));
  api.use(express.json());

  // Stukturierung: CQRS Pattern
  // Command (=> Routen die etwas machen; nicht für Abfragen)
  api.post("/note-todo", noteTodo({ store }));
  api.post("/mark-todo-as-done/:id", markTodoAsDone({ store }));

  //  Queries (=> Abfragen von Daten)
  api.get("/todos", getTodos({ store }));
  api.get("/done-todos", getDoneTodos({ store }));

  //api.get("/todos", (req, res) => {
  // res.json({ message: "Hola mundo!" }); // => setzt automatisch "content-type":"application/json" und JSON.stringify;
  // res.end() wird auch versteckt aufgerufen!
  // });

  return api;
};

export { getApi };
