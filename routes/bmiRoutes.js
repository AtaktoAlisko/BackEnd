const express = require("express");
const router = express.Router();

let bmiHistory = [];

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

router.get("/history", (req, res) => {
  res.sendFile("history.html", { root: "./public" });
});

router.post("/bmicalculator", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height =
    parseFloat(req.body.height) / (req.body.units === "metric" ? 100 : 1);
  const gender = req.body.gender;
  const age = parseInt(req.body.age);
  const units = req.body.units;
  const bmi = calculateBMI(weight, height);

  const timestamp = new Date().toLocaleString();

  const historyEntry = {
    bmi,
    weight,
    height,
    gender,
    age,
    units,
    timestamp,
  };

  bmiHistory.push(historyEntry);

  const resultText = interpretBMI(bmi);
  res.send(resultText);
});

router.delete("/deleteentry", (req, res) => {
  const timestampToDelete = req.query.timestamp;

 
  const indexToDelete = bmiHistory.findIndex(
    (entry) => entry.timestamp === timestampToDelete
  );

  if (indexToDelete !== -1) {
   
    bmiHistory.splice(indexToDelete, 1);
    res.json(bmiHistory);
  } else {
    res.status(404).json({ error: "Entry not found" });
  }
});

router.get("/gethistory", (req, res) => {
  res.json(bmiHistory);
});

function calculateBMI(weight, height, units) {
  if (weight <= 0 || height <= 0) {
    return "Invalid input. Weight and height should be positive values.";
  }

  const heightInMeters = units === "metric" ? height / 100 : height;
  const bmi = weight / Math.pow(heightInMeters, 2);
  return bmi.toFixed(2);
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return `Your BMI is ${bmi}. You are underweight.`;
  } else if (bmi >= 18.5 && bmi < 25) {
    return `Your BMI is ${bmi}. You have a normal weight.`;
  } else if (bmi >= 25 && bmi < 30) {
    return `Your BMI is ${bmi}. You are overweight.`;
  } else {
    return `Your BMI is ${bmi}. You are obese.`;
  }
}

module.exports = router;
