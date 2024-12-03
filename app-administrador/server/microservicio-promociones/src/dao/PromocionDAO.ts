import { Request, Response } from "express";
import db from "../config/db"; 

export class PromocionDAO {

  static agregarPromocion = async (req: Request, res: Response): Promise<void> => {

    const { nombre, descuento } = req.body;
     try {
      
      const query = "INSERT INTO PROMOCIONES (nombre, porcentaje) VALUES (?, ?)";
      db.query(query, [nombre, descuento], (err, results) => {
        if (err) {
          console.error("Error ejecutando la consulta", err);
          res.status(500).json({ message: "Error al agregar la promoción", error: err });
          return;
        }

        res.status(201).json({
          message: "Promoción agregada con éxito"
        });
      });
    } catch (err) {
      console.error("Error al agregar la promoción", err);
      res.status(500).json({ message: "Error al procesar la solicitud", error: err });
    }
  
  }

  static consultarPromociones = async (req: Request, res: Response): Promise<void> => {
    db.query("SELECT * FROM PROMOCIONES", (err, results) => {
      if (err) {
        console.error("Error executing query", err);
        res.status(500).json({ message: "Error fetching promotions", error: err });
        return;
      }

      console.log(results); 
      res.status(200).json(results); 
    });
  };
}

export default PromocionDAO;
