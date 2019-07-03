import BaseModel from 'simple-knex-model';

export default class Messages extends BaseModel {
    constructor(doc) {
        super(doc);
    }

    static getMessages() {
        return Messages.query().select();
    }

    static async setMessage(message) {
        await Messages.query().insert({message});
    }

    static async deleteMessage(id) {
        await Messages.query().where({id}).del();
    }

    static async editMessage(id, message) {
        await Messages.query().update({message}).where({id});
    }

    static get tableName() {
        return 'messages';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: {type: 'integer'},
                message: {type: 'string'}
            },
        };
    }
}