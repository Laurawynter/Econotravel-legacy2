import {config as dotenvConfig} from 'dotenv';

dotenvConfig();

export const config = ():any => {
    const uri:string = process.env.DB_CONN_STRING || "mongodb://localhost:2710";
    const db:string = process.env.DB_NAME || "movies";

    return {
        uri,
        db
    }
}