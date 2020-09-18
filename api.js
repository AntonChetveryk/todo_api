const express = require("express");
const router = express.Router();
const TodoItem = require("./schema");

router.get("/todos", async (req, res) => {
  try {
    const items = await TodoItem.find({});
    res.send(items);
  } catch (error) {
    console.log(error);
  }
});

router.post("/todos", async (req, res) => {
  const item = new TodoItem({
    name: req.body.name,
    description: req.body.description,
    isDone: req.body.isDone,
  });

  try {
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

router.put("/todos/:id", async (req, res) => {
  try {
    await TodoItem.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const data = await TodoItem.findOne({ _id: req.params.id });
    res.send(JSON.stringify(data));
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    const data = await TodoItem.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

module.exports = router;
