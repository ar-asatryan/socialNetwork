import mysqlConfig from '../../configs/mysql';

const knex = require('knex')(mysqlConfig);

export default knex;