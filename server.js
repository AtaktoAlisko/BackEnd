const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bmiRoutes = require("./routes/bmiRoutes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", bmiRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
