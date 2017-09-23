/*
https://node-postgres.com/features/pooling
If you're working on a web application or other software which makes frequent queries 
you'll want to use a connection pool.
*/
const { Pool } = require('pg');
const connectStr = "postgres://webuser:123abc@localhost/recipebook";

const pool = new Pool({
  connectionString: connectStr,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  queryWithLog: (text, params, callback) => {
    const start = Date.now()
    return pool.query(text, params, (err, res) => {
      const duration = Date.now() - start;
      console.log('executed query', { text, duration, rows: res.rowCount })
      callback(err, res);
    })
  }
}