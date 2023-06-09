//This is a snippet for populating the database with seed data.

const {items} = require('./seedData.js');

const {sequelize} = require('./db');
const {Book} = require('./models');

const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(items.map(item => Item.create(item)));

        console.log("Db has been populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();