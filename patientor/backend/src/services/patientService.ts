import patients from "../../data/patients.ts";
import type { NewPatient, Patient, PatientSecure } from "../types.ts";
import { v1 as uuid } from "uuid";

const getAllPatients = (): PatientSecure[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const id = uuid();
  const newPatient = {
    id,
    ...patient,
  };

  patients.push(newPatient);

  return newPatient;
};

export default {
  getAllPatients,
  addPatient,
};
