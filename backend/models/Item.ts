import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/dbConfig";

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1, 100] },
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: { min: 0 },
    },
  },
  {
    sequelize,
    modelName: "Item",
    timestamps: true,
  }
);

export default Item;
