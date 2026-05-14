import { type NewPatient, Gender } from "./types.ts";

const isString = (param: unknown): param is string => {
  return typeof param === "string" || param instanceof String;
};

const parseName = (name: unknown): string => {
  if (!isString(name)) throw new Error("name missing or invalid");
  return name;
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) throw new Error("ssn missing or invalid");
  return ssn;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) throw new Error("occupation missing or invalid");
  return occupation;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date))
    throw new Error("date missing or invalid");

  return date;
};

const isGender = (gender: string): gender is Gender => {
  return (Object.values(Gender) as string[]).includes(gender);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender))
    throw new Error("gender missing or invalid");

  return gender;
};

const parseNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object")
    throw new Error("object missing or invalid");

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newEntry: NewPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };

    return newEntry;
  }

  throw new Error("Incorrect data: some fields are missing");
};

export default parseNewPatient;
