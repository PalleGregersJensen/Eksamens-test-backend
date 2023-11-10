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
    // let employeeToFind = employees.find((employee) => employee.name === id);
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
});

export { vacantShiftsRouter };
