const express = require("express")
const app = express();

app.use(express.static("public"));
const port = process.env.PORT || 5002;

app.get("/iframe-website1", (req, res) => {
  res.sendFile(__dirname + "/public/iframe-website1.html");
});

app.get("/iframe-website2", (req, res) => {
  res.sendFile(__dirname + "/public/iframe-website2.html");
});

app.listen(port, () => {
  console.log(`server 2 is running on port ${port}`);
});
