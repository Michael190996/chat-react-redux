import BaseModel from 'simple-knex-model';
import Knex from 'knex';
import Messages from './Messages';
import config from '../config';

const pg = Knex({
    connection: config.POSTGRES,
    client: 'pg'
});

BaseModel.knex(pg);

export {
    Messages
};