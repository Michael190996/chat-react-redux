import dotenv from 'dotenv';

const data = dotenv.config();

export default {
    API: `${data.parsed.BACK_HOST}:${data.parsed.BACK_PORT}`,
    PROD: !!data.parsed.PROD,
    POSTGRES: {
        host: data.parsed.POSTGRES_HOST,
        port: data.parsed.POSTGRES_PORT,
        database: data.parsed.POSTGRES_DATABASE,
        user: data.parsed.POSTGRES_USER,
        password: data.parsed.POSTGRES_PASSWORD,
        ssl: !!data.parsed.SSL
    }
}