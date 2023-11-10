import { Router } from "express";
import { connection } from "./database.js";

const vacantShiftsRouter = Router();

// Select all from Vancant_Shifts table
vacantShiftsRouter.get("/", (request, response) => {
  const query = "SELECT * FROM Vacant_shifts ORDER BY Date";
  console.log(query);
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.json(results);
    }
  });
});

// Book shift
vacantShiftsRouter.put("/:ShiftID", async (request, response) => {
  const newShiftID = Number(request.params.ShiftID);
  console.log(newShiftID);
  console.log("Er der hul igennem?");
  const dataEmployee = request.body;
    console.log(dataEmployee);
const query =
    `UPDATE Vacant_Shifts SET EmployeeID=? WHERE ShiftID= ${newShiftID}`; //todo add relevant properties
  const values = [
    dataEmployee.EmployeeID,newShiftID
  ]; //todo add relevant properties
  console.log(values);

  connection.query(query, values, (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      response.json(results);
    }
  });
});


    // let employeeToFind = employees.find((employee) => employee.fullName === employee.FirstName);
    // console.log(employeeToFind);
  //   const body = request.body;
  //   console.log(body);
  //   artistToUpdate.image = body.image;
  //   artistToUpdate.activeSince = body.activeSince;
  //   artistToUpdate.name = body.name;
  //   artistToUpdate.birthdate = body.birthdate;
  //   artistToUpdate.genres = body.genres;
  //   artistToUpdate.labels = body.labels;
  //   artistToUpdate.website = body.website;
  //   artistToUpdate.shortDescription = body.shortDescription;

  //   fs.writeFile("artists.json", JSON.stringify(artists));
  //   response.json(artists);
// });

export { vacantShiftsRouter };
