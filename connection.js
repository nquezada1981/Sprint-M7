import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user : 'postgres',   
    database : 'bancosolar',
    password : 'Postgre.2023',
    port : 5432
});

pool.connect();

export {pool};