const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 80;
const path = require("path");

// To Read Css and Images

app.use("/static", express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());

// To Use Html or Pug Files

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//

app.get("/", (req, res) => {
  res.status(200).render("home.pug");
});
app.get("/home", (req, res) => {
  res.status(200).render("home.pug");
});
app.get("/index", (req, res) => {
  res.status(200).render("home.pug");
});
app.get("/login", (req, res) => {
  res.status(200).render("login.pug");
});
app.get("/signup", (req, res) => {
  res.status(200).render("signup.pug");
});
app.get("/upperBody", (req, res) => {
  res.status(200).render("upperBody.pug");
});
app.get("/lowerBody", (req, res) => {
  res.status(200).render("lowerBody.pug");
});
app.get("/diets", (req, res) => {
  res.status(200).render("diets.pug");
});

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://bhavesh:bhavesh69@bhavesh.hklougf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  });

var contactSchema = new mongoose.Schema({
  myname: String,
  email: String,
  phone: String,
  age: String,
  gender: String,
  message: String,
});
var WebContact = mongoose.model("WebContact", contactSchema);

app.post("/home", (req, res) => {
  var contactData = new WebContact(req.body);
  contactData
    .save()
    .then(() => {
      res.render("contactrecived.pug");
    })
    .catch(() => {
      res.status(400).render("contactfailed.pug");
    });
});

var signupSchema = new mongoose.Schema({
  myname: String,
  email: String,
  password1: String,
  password2: String,
});
var SignUpData = mongoose.model("SignUpData", signupSchema);

app.post("/signup", async (req, res) => {
  var signupData = new SignUpData(req.body);
  let finding = await SignUpData.findOne({ email: signupData.email });
  if (finding == null) {
    if (signupData.password1 == signupData.password2) {
      signupData
        .save()
        .then(() => {
          res.status(200).render("signupsuccess.pug");
        })
        .catch(() => {
          res.status(400).render("signupfailed.pug");
        });
    } else {
      res.render("signupmatchpassword.pug");
    }
  } else {
    res.render("signupalreadyaccount.pug");
  }
});

app.post("/login", async (req, res) => {
  try {
    const useremail = req.body.email;
    const userpass = req.body.password;

    const validuser = await SignUpData.findOne({ email: useremail });

    if (validuser.password1 === userpass) {
      res.status(200).render("loginsuccess.pug");
    } else {
      res.render("loginidpinvalid.pug");
    }
  } catch (error) {
    res.status(400).render("loginsignupfirst.pug");
  }
});

app.listen(port, () => {
  console.log(`Server Connected to the port ${port}`);
});
