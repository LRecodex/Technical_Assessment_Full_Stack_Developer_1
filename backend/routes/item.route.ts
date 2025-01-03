import { Router } from "express";
import itemController from "../controllers/item.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(itemController.getAllItems));
router.get("/:id", asyncHandler(itemController.getItemById));
router.post("/", asyncHandler(itemController.createItem));
router.put("/:id", asyncHandler(itemController.updateItem));
router.delete("/:id", asyncHandler(itemController.deleteItem));

export default router;
