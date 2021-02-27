/* eslint-disable import/no-anonymous-default-export */
import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(
            defaultOptions, 
            { 
                database:  process.env.NODE_ENV === 'test' 
                ? "postgres_test" 
                : defaultOptions.database 
            }
        )
    )
}