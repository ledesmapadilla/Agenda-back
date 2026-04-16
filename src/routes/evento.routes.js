import { Router } from "express";
import {
  getEventos,
  createEvento,
  updateEvento,
  deleteEvento,
} from "../controllers/evento.controller.js";

const router = Router();

// /api/eventos/:seccion  → lepa | la-martina | casa
router.get("/:seccion", getEventos);
router.post("/:seccion", createEvento);
router.put("/:id", updateEvento);
router.delete("/:id", deleteEvento);

export default router;
