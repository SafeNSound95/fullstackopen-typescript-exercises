import diagnoses from "../../data/diagnoses.ts";
import type { Diagnosis } from "../types.ts";

const getAllDiagnoses = (): Diagnosis[] => {
  return diagnoses;
};

export default {
  getAllDiagnoses,
};
