import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.get("/index", (req, res) => {
  res.render("index.ejs");
});

app.get("/skills", (req, res) => {
  res.render("skills.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/Aboutme", (req, res) => {
  res.render("Aboutme.ejs");
});


app.listen(port, () => {
  console.log(`app is running at ${port}`);
});


 
