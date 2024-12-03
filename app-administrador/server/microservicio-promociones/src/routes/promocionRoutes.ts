import express from "express";
import { PromocionDAO } from "../dao/PromocionDAO"; 

const router = express.Router();

router.get('/', PromocionDAO.consultarPromociones);

router.post('/', PromocionDAO.agregarPromocion);


export default router;
