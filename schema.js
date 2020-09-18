const { Schema, model } = require("mongoose");

const TodoItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  isDone: { type: Boolean, required: true },
});

const TodoItem = model("todo-item", TodoItemSchema);

module.exports = TodoItem;
