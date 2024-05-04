const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    MAILISK_API_KEY: "WF1G_p7Fe4oHZWWX6PVe6vhpih5bgh7btXl6gt3yrs",
    MAILISK_NAMESPACE: "ebav3wyj1ls2",
  },
  
});
