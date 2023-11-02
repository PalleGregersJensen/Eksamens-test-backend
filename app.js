import express from "express";
import cors from "cors";
import { Router } from "express";
import { connection } from "./database.js";
import send from "send";

const router = Router();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Select all from Vancant_Shifts table
app.get("/vacant_shifts", (request, response) => {
  const query = "SELECT * FROM Vacant_shifts";
  console.log(query);
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.json(results);
    }
  });
});

// App running on port 3000
app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

// Make sure, that the backend is running
app.get("/", (request, response) => {
    console.log("Backend kører");
    response.send("Backend kører");
});
