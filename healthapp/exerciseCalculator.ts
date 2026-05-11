interface ExerciseData {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (
  dailyExerciseHours: number[],
  target: number,
): ExerciseData => {
  const periodLength = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.filter((h) => h > 0).length;
  const average = dailyExerciseHours.reduce((a, b) => a + b, 0) / periodLength;
  const success = average >= target;

  let rating: number;
  let ratingDescription: string;

  if (average >= target) {
    rating = 3;
    ratingDescription = "great, you have met or exceeded the target.";
  } else if (target - average <= 0.5) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "sadly you weren't close to the target";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

const parseArgs = (args: string[]) => {
  if (!Array.isArray(args) || args.length === 0)
    throw new Error("Invalid input: Please provide a non-empty array.");

  if (args.some((h) => isNaN(Number(h)))) {
    throw new Error("Invalid input: All values must be numbers.");
  }

  return args.map((arg) => Number(arg));
};

try {
  const parsedArray = parseArgs(process.argv.slice(2));
  console.log(calculateExercises(parsedArray.slice(1), parsedArray[0]));
} catch (error) {
  let errorMessage = "Something bad happened: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
