import Evento from "../models/Evento.js";

export const getEventos = async (req, res) => {
  const { seccion } = req.params;
  const eventos = await Evento.find({ seccion }).sort({ fecha: 1 });
  res.json(eventos);
};

export const createEvento = async (req, res) => {
  const { seccion } = req.params;
  const evento = new Evento({ ...req.body, seccion });
  await evento.save();
  res.status(201).json(evento);
};

export const updateEvento = async (req, res) => {
  const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!evento) return res.status(404).json({ message: "Evento no encontrado" });
  res.json(evento);
};

export const deleteEvento = async (req, res) => {
  const evento = await Evento.findByIdAndDelete(req.params.id);
  if (!evento) return res.status(404).json({ message: "Evento no encontrado" });
  res.json({ message: "Evento eliminado" });
};
