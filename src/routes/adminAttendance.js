import express from "express";
import {
  clockIn,
  clockOut,
  getAdminAttendanceById,
  getAllAdminAttendance
} from "../controller/adminAttendanceController.js";

const router = express.Router();

router.post("/clockin", clockIn);
router.post("/clockout", clockOut);
router.get("/getAllAttendance", getAllAdminAttendance);
router.get("/:adminId", getAdminAttendanceById);

export default router;