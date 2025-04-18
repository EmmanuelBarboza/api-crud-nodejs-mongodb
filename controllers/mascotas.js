
import mascotasModel from "../models/mascotas.js";

class mascotasController{

    constructor(){

    }

    async create(req, res) {
        try {
            const data = mascotasModel.create(req.body);

            res.status(201).json({data, status: "create-ok"});
        } catch (error) {
            res.status(500).json({status: error.message});
        }
    }

    async update(req, res) {
        try {
            res.status(201).json({status: "update-ok"});
        } catch (error) {
            res.status(500).json({status: error.message});
        }
    }

    async getAll(req, res) {
        try {
            const data = await mascotasModel.getAll();
            res.status(201).json({data, status: "getAll-ok"});
        } catch (error) {
            res.status(500).json({status: error.message});
        }
    }

    async getOne(req, res) {
        try {
            const data = await mascotasModel.getOne(req.params.id);
            res.status(201).json({data, status: "getOne-ok"});
        } catch (error) {
            res.status(500).json({status: error.message});
        }
    }

    async delete(req, res) {
        try {
            res.status(201).json({status: "delete-ok"});
        } catch (error) {
            res.status(500).json({status: error.message});
        }
    }


}

export default new mascotasController();