import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const ensureDatabaseExists = async () => {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: parseInt(DB_PORT || "3306"),
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
    console.log(`Database "${DB_NAME}" ensured.`);
    await connection.end();
  } catch (error) {
    console.error("Error ensuring database exists:", error);
    throw error;
  }
};

const sequelize = new Sequelize(DB_NAME!, DB_USER!, DB_PASSWORD!, {
  host: DB_HOST,
  dialect: "mysql",
  port: parseInt(DB_PORT || "3306"),
  logging: false,
});

const connectToDatabase = async () => {
  try {
    await ensureDatabaseExists(); // Ensure the database exists before connecting
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

export { sequelize, connectToDatabase };
