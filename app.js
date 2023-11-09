import express from "express";
import cors from "cors";
import { Router } from "express";
import { connection } from "./database.js";
import { vacantShiftsRouter } from "./vacant_shifts.js";
import { employeeRouter } from "./employee.js";

// const router = Router();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/employees", employeeRouter);
app.use("/vacant_shifts", vacantShiftsRouter);


// App running on port 3000
app.listen(port, () => {
  console.log(`Server running on port${port}`);
});

// Make sure, that the backend is running
app.get("/", (request, response) => {
    console.log("Backend kører");
    response.send("Backend kører");
});

