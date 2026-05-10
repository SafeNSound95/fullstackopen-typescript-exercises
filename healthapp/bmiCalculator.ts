const calculateBmi = (height: number, weight: number): string => {
  if (
    typeof height === "number" &&
    !isNaN(height) &&
    height !== 0 &&
    typeof weight === "number" &&
    !isNaN(weight)
  ) {
    const heightInMeters = height / 100;
    const bmi = weight / heightInMeters ** 2;

    if (height <= 0 || weight <= 0) {
      throw new Error(
        "Height and weight must be positive numbers greater than zero.",
      );
    }

    if (bmi < 16) return "Underweight (Severe thinness)";
    if (bmi >= 16 && bmi < 17) return "Underweight (Moderate thinness)";
    if (bmi >= 17 && bmi < 18.5) return "Underweight (Mild thinness)";
    if (bmi >= 18.5 && bmi < 25.0) return "Normal range";
    if (bmi >= 25 && bmi < 30) return "Overweight (Pre-obese)";
    if (bmi >= 30 && bmi < 35) return "Obese (Class I)";
    if (bmi >= 35 && bmi < 40) return "Obese (Class II)";
    if (bmi >= 40) return "Obese (Class III))";

    throw new Error(
      "Invalid inputs, please make sure to input the correct weight in kilograms and height in centimeters",
    );
  } else {
    throw new Error(
      "Invalid inputs, please make sure to input both the height and width as numbers",
    );
  }
};

try {
  console.log(calculateBmi(180, 74));
} catch (error) {
  let errorMessage = "Something went wrong: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
