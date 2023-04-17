export default (sequelize, Sequelize) => {
    const card = sequelize.define('card', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING
        },
        listId : {
            type: Sequelize.INTEGER,
            referencesKey: 'lists.id',
            allowNull: false
        }
    });
    return card;
};
