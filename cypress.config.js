const { defineConfig } = require("cypress");
const mysql = require('mysql2/promise');

module.exports = defineConfig({
  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
  projectId: "e8itgu",


  e2e: {
    setupNodeEvents(on, config) {
      // on("task", {
      //   queryDb: (query) => {
      //     return queryTestDb(query, config);
      //   }
      // })
      on('task', {
        queryDb: async (query) => {
          const connection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '12345678',
            database: 'localhost',
          });
    
          const [rows] = await connection.execute(query);
          await connection.end();
    
          return rows;
        },
      });
    
      // Ensure the following line is outside the on() function
      return config;
    },
    // "env": {
    //   "db": {
    //     "server": '127.0.0.1',
    //     user: "root",
    //     password: "12345678",
    //     database: "mydemo"
    //   },
    // },
  },
});
function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else {
        connection.end();
        return resolve(results);
      }
    },

    )
  })
}
// module.exports = {
//   projectId: "e8itgu"
//   // The rest of the Cypress config options go here...
// }
