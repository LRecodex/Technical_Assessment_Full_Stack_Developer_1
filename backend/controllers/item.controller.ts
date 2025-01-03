import { Request, Response, NextFunction } from "express";
import Item from "../models/Item";
import { itemSchema } from "../utils/itemValidator";

const itemController = {
  getAllItems: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const items = await Item.findAll();
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  },

  getItemById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const item = await Item.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: "Item not found" });
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  },

  createItem: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = itemSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });
      const item = await Item.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  },

  updateItem: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = itemSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });
      const [updated] = await Item.update(req.body, { where: { id: req.params.id } });
      if (!updated) return res.status(404).json({ error: "Item not found" });
      const updatedItem = await Item.findByPk(req.params.id);
      res.status(200).json(updatedItem);
    } catch (error) {
      next(error);
    }
  },

  deleteItem: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleted = await Item.destroy({ where: { id: req.params.id } });
      if (!deleted) return res.status(404).json({ error: "Item not found" });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
};

export default itemController;
