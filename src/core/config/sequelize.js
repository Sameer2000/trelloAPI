import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import cardModel from '../models/card/cardModel.js';
import listModel from '../models/list/listModel.js';

dotenv.config();

export const sequelize = new Sequelize('trello', 'sameer', process.env.PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const db = {};

/* In Sequelize, Sequelize is the main class that represents the database connection, 
 while sequelize is an instance of that class that represents a specific connection to a database. */
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cards = cardModel(sequelize, Sequelize);
db.lists = listModel(sequelize, Sequelize);

export default db;