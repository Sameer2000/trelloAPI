import { error } from "console";
import db from "../../config/sequelize.js";

const List = db.lists;

const createList = (req, res) => {
  const { id, name } = req.body;
  try {
    const newList = {
      id,
      name,
    };
    List.create(newList)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating list.");
  }
};

const getLists = (req, res) => {
  try {
    List.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).snd(error.message);
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in fetching lists.");
  }
};

// use List.findByPk() to get a particular list

const deleteList = (req, res) => {
  try {
    List.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.send("deleted successfully");
      })
      .catch((error) => {
        res.status(500).snd(error.message);
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in deleting list.");
  }
};

export default { createList, getLists, deleteList };
