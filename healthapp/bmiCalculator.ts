import { parseHeightAndWeight } from "./utils.ts";

export const calculateBmi = (height: number, weight: number): string => {
  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;

  if (bmi < 16) return "Underweight (Severe thinness)";
  if (bmi >= 16 && bmi < 17) return "Underweight (Moderate thinness)";
  if (bmi >= 17 && bmi < 18.5) return "Underweight (Mild thinness)";
  if (bmi >= 18.5 && bmi < 25.0) return "Normal range";
  if (bmi >= 25 && bmi < 30) return "Overweight (Pre-obese)";
  if (bmi >= 30 && bmi < 35) return "Obese (Class I)";
  if (bmi >= 35 && bmi < 40) return "Obese (Class II)";
  return "Obese (Class III))";
};

if (process.argv[1] === import.meta.filename) {
  try {
    const { height, weight } = parseHeightAndWeight(
      process.argv[2],
      process.argv[3],
    );
    console.log(calculateBmi(height, weight));
  } catch (error) {
    let errorMessage = "Something went wrong: ";
    if (error instanceof Error) {
      errorMessage += error.message;
    }
    console.log(errorMessage);
  }
}
