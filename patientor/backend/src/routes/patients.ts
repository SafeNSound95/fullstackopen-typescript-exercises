import express, { type Response } from "express";
import patientService from "../services/patientService.ts";
import type { PatientSecure } from "../types.ts";

const router = express.Router();

router.get("/", (_req, res: Response<PatientSecure[]>) => {
  res.send(patientService.getAllPatients());
});

export default router;
