import express from "express";
import listController from "../controllers/list/listController.js";

const router = express.Router();

router.post('/', listController.createList);
router.get('/', listController.getLists);
router.delete('/:id', listController.deleteList);

export default router;