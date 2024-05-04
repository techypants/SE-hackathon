import fs from "fs";
import csvParser from "csv-parser";

export default function handler(req, res) {
  // Path to your CSV file
  const filePath = "./predictive_maintenance.csv";

  // Read the CSV file
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // Send the parsed CSV data as JSON response
      res.status(200).json(results);
    })
    .on("error", (error) => {
      console.error("Error reading CSV file:", error);
      res.status(500).end("Error reading CSV file");
    });
}
