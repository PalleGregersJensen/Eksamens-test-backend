import { Router } from "express";
import { connection } from "./database.js";

const employeeRouter = Router();

// Select all from Vancant_Shifts table ordered by LastName
employeeRouter.get("/", (request, response) => {
  const query = "SELECT * FROM employees ORDER BY LastName";
  console.log(query);
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.json(results);
      console.log(results);
    }
  });
});

export { employeeRouter };