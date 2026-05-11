import express from "express";

import { calculateBmi } from "./bmiCalculator.ts";
import { parseHeightAndWeight } from "./utils.ts";
import { calculateExercises } from "./exerciseCalculator.ts";

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

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || target === undefined)
    return res.status(400).json({
      error: "parameters missing",
    });

  if (
    isNaN(Number(target)) ||
    !Array.isArray(daily_exercises) ||
    daily_exercises.length === 0 ||
    daily_exercises.some((h) => isNaN(Number(h)))
  ) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  const result = calculateExercises(
    daily_exercises.map((num) => Number(num)),
    Number(target),
  );

  return res.send(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
