import env from './env.js'; 
import Sequelize  from 'sequelize';
import {model} from '../modelos/cliente.model.js'

const sequelize = new Sequelize(env.database, env.username, env.password, {
	host: env.host,
  	dialect: env.dialect,
  	operatorsAliases: false,	 
});

const db = {
	"Sequelize": Sequelize,
	"sequelize": sequelize,
	"Cliente": model(sequelize, Sequelize)
};
	 
export default db;