import Sequelize from 'Sequelize';

//  const sequelize = new Sequelize('mysql://user:pass@host:port/dbname');
const sequelize = new Sequelize( 'films', 'root', '------', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const Film = sequelize.define(
    'Film',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            field: 'title'
        },
        poster: {
            type: Sequelize.STRING,
            field: 'poster'
        }
    },
    {
        freezeTableName: true
    }
);

Film.sync({force: true}).then( () => {
    return Film.create({
        title: 'Star Wars: The last Jedi.',
        poster: 'alguna.url'
    })
});