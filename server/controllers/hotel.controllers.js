import Hotel from "../models/Hotel.js";

//CREATE HOTEL
const createHotel = async (req, res, next) => {
  try {
    const newHotel = await Hotel.create(req.body);
    await newHotel.save();
    console.log(newHotel);
    res.status(200).json({ message: "Hotel created successfully", newHotel });
  } catch (error) {
    next();
  }
};

//UPDATE
const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(req.body);
  } catch (error) {
    next();
  }
};

//DELETE
const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("Hotel has been deleted.");
  } catch (error) {
    next();
  }
};

//GET
const getHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    console.log("Request URL:", req.originalUrl);
    next();
    res.status(200).json(hotel);
  } catch (error) {
    next();
  }
};

//GET ALL HOTELS
const getAllHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next();
  }
};

export { createHotel, updateHotel, deleteHotel, getHotelById, getAllHotel };
