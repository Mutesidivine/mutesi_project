const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Session setup
app.use(
  session({
    secret: "mysessionsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  })
);

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "epms",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database Connected");
  }
});

// LOGIN
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE username=? AND password=?";

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error",
      });
    }

    if (result.length > 0) {
      req.session.user = result[0];

      res.json({
        message: "Login Successful",
        user: result[0],
      });
    } else {
      res.status(401).json({
        message: "Invalid Username or Password",
      });
    }
  });
});


// LOGOUT
app.post("/api/logout", (req, res) => {
  req.session.destroy();
  res.json({
    message: "Logged out",
  });
});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});