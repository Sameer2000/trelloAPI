import express from "express";
import bodyParser from "body-parser";
import db from '../core/config/sequelize.js';
import router from '../core/routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// create table if not exist
db.sequelize.sync();

router(app);

app.listen(8000, () => {
    console.log('Server is running');
});