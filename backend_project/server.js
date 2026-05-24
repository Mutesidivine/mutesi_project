const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   DATABASE CONNECTION
========================= */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "epms"
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
  } else {
    console.log("MySQL Connected");
  }
});


/* =====================================================
   USERS CRUD
===================================================== */

/* INSERT USER */
app.post("/users/insert", (req, res) => {

  const { user_id, username, password, email } = req.body;

  const sql =
    "INSERT INTO users VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [user_id, username, password, email],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Insert Failed");
      } else {
        res.send("User Inserted Successfully");
      }

    }
  );
});


/* SELECT USERS */
app.get("/users/select", (req, res) => {

  db.query(
    "SELECT * FROM users",
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Select Failed");
      } else {
        res.json(result);
      }

    }
  );

});


/* UPDATE USER */
app.put("/users/update/:id", (req, res) => {

  const id = req.params.id;

  const { username, password, email } = req.body;

  const sql =
    "UPDATE users SET username=?, password=?, email=? WHERE user_id=?";

  db.query(
    sql,
    [username, password, email, id],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Update Failed");
      } else {
        res.send("Updated Successfully");
      }

    }
  );

});


/* DELETE USER */
app.delete("/users/delete/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM users WHERE user_id=?",
    [id],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Delete Failed");
      } else {
        res.send("Deleted Successfully");
      }

    }
  );

});


/* =====================================================
   CAR CRUD
===================================================== */

/* INSERT CAR */
app.post("/car/insert", (req, res) => {

  const { platenumber, namedriver, phonenumber } = req.body;

  const sql =
    "INSERT INTO car VALUES (?, ?, ?)";

  db.query(
    sql,
    [platenumber, namedriver, phonenumber],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Insert Failed");
      } else {
        res.send("Car Inserted Successfully");
      }

    }
  );

});


/* SELECT CAR */
app.get("/car/select", (req, res) => {

  db.query(
    "SELECT * FROM car",
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Select Failed");
      } else {
        res.json(result);
      }

    }
  );

});


/* UPDATE CAR */
app.put("/car/update/:id", (req, res) => {

  const id = req.params.id;

  const { namedriver, phonenumber } = req.body;

  const sql =
    "UPDATE car SET namedriver=?, phonenumber=? WHERE platenumber=?";

  db.query(
    sql,
    [namedriver, phonenumber, id],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Update Failed");
      } else {
        res.send("Updated Successfully");
      }

    }
  );

});


/* DELETE CAR */
app.delete("/car/delete/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM car WHERE platenumber=?",
    [id],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Delete Failed");
      } else {
        res.send("Deleted Successfully");
      }

    }
  );

});


/* =====================================================
   PARKING RECORD CRUD
===================================================== */

/* INSERT PARKING RECORD */
app.post("/parkingrecord/insert", (req, res) => {

  const {
    recordid,
    platenumber,
    slotnumber,
    entrytime,
    exittime,
    duration
  } = req.body;

  const sql =
    "INSERT INTO parkingrecord VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [
      recordid,
      platenumber,
      slotnumber,
      entrytime,
      exittime,
      duration
    ],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Insert Failed");
      } else {
        res.send("Parking Record Inserted Successfully");
      }

    }
  );

});


/* SELECT PARKING RECORD */
app.get("/parkingrecord/select", (req, res) => {

  db.query(
    "SELECT * FROM parkingrecord",
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Select Failed");
      } else {
        res.json(result);
      }

    }
  );

});


/* UPDATE PARKING RECORD */
app.put("/parkingrecord/update/:id", (req, res) => {

  const id = req.params.id;

  const {
    platenumber,
    slotnumber,
    entrytime,
    exittime,
    duration
  } = req.body;

  const sql =
    "UPDATE parkingrecord SET platenumber=?, slotnumber=?, entrytime=?, exittime=?, duration=? WHERE recordid=?";

  db.query(
    sql,
    [
      platenumber,
      slotnumber,
      entrytime,
      exittime,
      duration,
      id
    ],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Update Failed");
      } else {
        res.send("Updated Successfully");
      }

    }
  );

});


/* DELETE PARKING RECORD */
app.delete("/parkingrecord/delete/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM parkingrecord WHERE recordid=?",
    [id],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Delete Failed");
      } else {
        res.send("Deleted Successfully");
      }

    }
  );

});


/* =====================================================
   PAYMENT CRUD
===================================================== */

/* INSERT PAYMENT */
app.post("/payment/insert", (req, res) => {

  const {
    recordid,
    amountpaid,
    paymentdate
  } = req.body;

  const sql =
    "INSERT INTO payment VALUES (?, ?, ?)";

  db.query(
    sql,
    [recordid, amountpaid, paymentdate],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Insert Failed");
      } else {
        res.send("Payment Inserted Successfully");
      }

    }
  );

});


/* SELECT PAYMENT */
app.get("/payment/select", (req, res) => {

  db.query(
    "SELECT * FROM payment",
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Select Failed");
      } else {
        res.json(result);
      }

    }
  );

});


/* UPDATE PAYMENT */
app.put("/payment/update/:id", (req, res) => {

  const id = req.params.id;

  const {
    amountpaid,
    paymentdate
  } = req.body;

  const sql =
    "UPDATE payment SET amountpaid=?, paymentdate=? WHERE recordid=?";

  db.query(
    sql,
    [amountpaid, paymentdate, id],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Update Failed");
      } else {
        res.send("Updated Successfully");
      }

    }
  );

});


/* DELETE PAYMENT */
app.delete("/payment/delete/:id", (req, res) => {

  const id = req.params.id;

  db.query(
    "DELETE FROM payment WHERE recordid=?",
    [id],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Delete Failed");
      } else {
        res.send("Deleted Successfully");
      }

    }
  );

});


/* =========================
   LOGIN
========================= */
app.post("/login", (req, res) => {

  const { username, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE username=? AND password=?";

  db.query(
    sql,
    [username, password],
    (err, result) => {

      if (err) {
        console.log(err);
        res.send("Login Failed");
      } else {

        if (result.length > 0) {
          res.send("Login Successful");
        } else {
          res.send("Invalid Username or Password");
        }

      }

    }
  );

});


/* =========================
   SERVER
========================= */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});