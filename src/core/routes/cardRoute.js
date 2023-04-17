import express from "express";
import cardController from "../controllers/card/cardController.js";

const router = express.Router();

router.post('/', cardController.createCard);
router.delete('/:id', cardController.deleteCard);
router.put('/:id', cardController.updateCard);

export default router;