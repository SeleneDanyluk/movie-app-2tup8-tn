import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './movie_app.db'
});

export { sequelize };