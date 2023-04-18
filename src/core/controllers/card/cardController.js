import db from "../../config/sequelize.js";

const Card = db.cards;

const createCard = (req, res) => {
  const { id, name, listId } = req.body;
  try {
    const newCard = {
      id,
      name,
      listId,
    };
    Card.create(newCard)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in creating card.");
  }
};

const deleteCard = (req, res) => {
  try {
    Card.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.send("deleted successfully");
      })
      .catch((error) => {
        res.status(500).snd(error.message);
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in deleting card.");
  }
};

const updateCard = (req, res) => {
  const { name, listId } = req.body;
  try {
    Card.update({ name, listId }, { where: { id: req.params.id } })
      .then((data) => {
        res.send("Updated successfully");
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in updating card.");
  }
};

export default { createCard, deleteCard, updateCard };
