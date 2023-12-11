const task = require("../model/task")


//create
exports.create = async (req, res, next) => {
  const { name, number } = req.body
  try {

    await task.create({
      name, number

    }).then(task =>
      res.status(200).json({
        message: "task successfully created",
        task,
      })
    )
  } catch (error) {
    res.status(401).json({
      message: "task not successful created",
      error: error.mesage,
    })
  }
}

//update

exports.update = async (req, res) => {
  try {
    const item = await task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete//

exports.remove = async (req, res) => {

  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send({ message: "The item has been deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
//get All tasks function
exports.getAlltask = async (req, res) => {
  try {
    const all_task= await task.find({});
    res.json(all_task);
  } catch (error) {
    res.json({
      message: "Something went wrong, try again later",
      error: error.message,
    });
  }
};

//get one tasks
exports.getOnetask = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json({ message: "task id does not exit" });
  }
  const task = await Task.findById(id)
  res.json(task)
}



