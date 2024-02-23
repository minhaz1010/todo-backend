const app = require("./app");
const port = process.env.PORT || 5000;
require("dotenv").config();
app.listen(5000, () => {
  console.log("Server connected at", 5000);
});
