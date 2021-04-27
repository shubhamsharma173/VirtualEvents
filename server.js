const mongoose = require("mongoose");
const nodemailer = require('nodemailer');
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./user");
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
  process.env.url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
app.post("/login", (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      let cUser={
        error: "User not found",
      }
      console.log(cUser);
      res.send(cUser);
    }
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        let cUser={
          _id: req.user._id,
          name: req.user.name,
          img: req.user.img,
          error: false,
        }
        res.send(cUser);
        console.log(cUser);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  console.log(req.body);
  let id=req.body.username.toLowerCase();
  User.findOne({ username: id }, async (err, doc) => {
    if (err) {
      console.log(err);
    };
    if (doc) {
      console.log("user already exist")
      res.send("User Already Exists, Please Login")};
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        name: req.body.name,
        username: id,
        password: hashedPassword,
        img: "/assets/img/profiles/l-1.jpg",
      });
      await newUser.save();
      console.log("User Registered");
      res.send("User Registered Succesfully");
    }
  });
});

function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
// let ranPass=generatePassword();
// console.log(ranPass);

app.post("/registeration", (req, res) => {
  let ranPass=generatePassword();
  console.log(req.body);
  let id=req.body.username.toLowerCase();
  User.findOne({ username: id }, async (err, doc) => {
    if (err) throw err;
    if (doc) {
      res.send("User Already Exists")};
    if (!doc) {
      const hashedPassword = await bcrypt.hash(ranPass, 10);

      const newUser = new User({
        name: req.body.name,
        username: id,
        password: hashedPassword,
        img: "/assets/img/profiles/l-1.jpg",
      });
      await newUser.save();
      // Step 1
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ishita.nyuc@gmail.com', // TODO: your mail account
          pass: 'Ishita@nyuc3020' // TODO: your mail password
        }
      });

      // Step 2
      let mailOptions = {
        from: 'ishita.nyuc@gmail.com', // TODO: email sender
        to: id, // TODO: email receiver
        subject: 'Registered Successfully!!',
        text: 'Greetings! \n\nThank you for registering with FICCI CAPAM 2020!\n\nPlease find your email id and password below\n\nEMail- '+id+'\n\nPassword- '+ranPass+'\n\nHead on to our login page now-> https://ficci.netlify.app/ \n\nFeel free to reach out in case of any issue. Good Luck, thanks.\n\nRegards\n\nFICCI CAPAM 2020',
      };

      // Step 3
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
          console.log('Error ',err);
        }else{
          console.log('Email sent!!!')
        }
        
      });
      console.log("User Registered");
      res.send("User Registered");
    }
  });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.send();
});
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(4000, () => {
  console.log("Server Has Started");
});
