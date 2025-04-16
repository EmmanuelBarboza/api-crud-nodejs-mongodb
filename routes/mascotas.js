import express from 'express';
const route = express.Router();
import mascotaController from '../controllers/mascotas.js';
import e from 'express';


route.post("/", mascotaController.create); //Crear mascota
route.get("/:id", mascotaController.getOne); //Buscar mascota por id
route.get("/", mascotaController.getAll); //Listar mascotas
route.put("/:id", mascotaController.update); //Actualizar mascota
route.delete("/:id", mascotaController.delete); //Eliminar mascota


export default route;