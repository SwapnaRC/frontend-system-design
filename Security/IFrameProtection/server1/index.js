const express = require("express")
const app = express();


app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy',"frame-ancestors 'self'")
  next();
})
app.use(express.static("public"));
const port = process.env.PORT || 5001;

app.get("/example1", (req, res) => {
  res.sendFile(__dirname + "/public/example1.html");
});

app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/public/example2.html");
});

app.listen(port, () => {
  console.log(`server 1 is running on port ${port}`);
});
