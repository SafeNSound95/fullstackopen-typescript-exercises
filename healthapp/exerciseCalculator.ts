interface ExerciseData {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  dailyExerciseHours: number[],
  target: number,
): ExerciseData => {
  if (!Array.isArray(dailyExerciseHours) || dailyExerciseHours.length === 0) {
    throw new Error("Invalid input: Please provide a non-empty array.");
  }

  if (dailyExerciseHours.some((h) => isNaN(Number(h)))) {
    throw new Error("Invalid input: All values must be numbers.");
  }

  const hours = dailyExerciseHours.map((h) => Number(h));

  const periodLength = hours.length;
  const trainingDays = hours.filter((h) => h > 0).length;
  const average = hours.reduce((a, b) => a + b, 0) / periodLength;
  const success = average >= target;

  let rating: number;
  let ratingDescription: string;

  if (average >= target) {
    rating = 1;
    ratingDescription = "great, you have met or exceeded the target.";
  } else if (target - average <= 0.5) {
    rating = 2;
    ratingDescription = "not too bad but could be better";
  } else {
    rating = 3;
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

try {
  console.log(calculateExercises([1, 2, 3, 4], 2));
} catch (error) {
  let errorMessage = "Something bad happened: ";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
