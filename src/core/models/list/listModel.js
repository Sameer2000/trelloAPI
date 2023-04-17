export default (sequelize, Sequelize) => {
    const list = sequelize.define('list', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        name: {
            type: Sequelize.ENUM('todo', 'in progress', 'done')
        }
    });
    return list;
};