import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotelById,
  updateHotel,
} from "../controllers/hotel.controllers.js";

const router = express.Router();

//CREATE
router.route("/").post(createHotel);

//UPDATE
router.route("/:id").put(updateHotel);

//DELETE
router.route("/:id").delete(deleteHotel);

//GET
router.route("/:id").get(getHotelById);

//GET ALL
router.route("/").get(getAllHotel);

export default router;
