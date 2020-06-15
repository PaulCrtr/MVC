const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

const routes = require("./routes/index");
app.use("/", routes);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
