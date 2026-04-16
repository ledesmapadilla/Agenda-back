import { Router } from "express";
import eventoRoutes from "./evento.routes.js";

const router = Router();

router.get("/", (req, res) => res.json({ message: "API Agenda funcionando" }));
router.use("/eventos", eventoRoutes);

export default router;
