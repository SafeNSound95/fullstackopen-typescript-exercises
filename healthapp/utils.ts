interface Measurments {
  height: number;
  weight: number;
}

export const parseHeightAndWeight = (height: any, weight: any): Measurments => {
  if (!height || !weight)
    throw new Error("Input error: height and weight cannot be empty");

  const heightAsNumber = Number(height);
  const weightAsNumber = Number(weight);

  if (isNaN(heightAsNumber) || isNaN(weightAsNumber))
    throw new Error(
      "Invalid inputs, please make sure to input both the height and weight as numbers",
    );

  if (heightAsNumber <= 0 || weightAsNumber <= 0)
    throw new Error(
      "Height and weight must be positive numbers greater than zero.",
    );

  return {
    height: heightAsNumber,
    weight: weightAsNumber,
  };
};
