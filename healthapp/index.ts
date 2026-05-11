import express from "express";

import { calculateBmi } from "./bmiCalculator.ts";
import { parseHeightAndWeight } from "./utils.ts";

const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  try {
    const { height, weight } = req.query;

    const { height: parsedHeight, weight: parsedWeight } = parseHeightAndWeight(
      height,
      weight,
    );

    const bmi = calculateBmi(parsedHeight, parsedWeight);
    res.json({ weight: parsedWeight, height: parsedHeight, bmi });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);

    res.status(400).json({
      error: "malformatted parameters",
    });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
