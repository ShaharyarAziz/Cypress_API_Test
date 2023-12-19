const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
  projectId: "e8itgu",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
// module.exports = {
//   projectId: "e8itgu"
//   // The rest of the Cypress config options go here...
// }
