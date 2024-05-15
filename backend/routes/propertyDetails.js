const express = require("express");

const router = express.Router();
const PropertyDetails = require("../models/PropertyDetails");
const { verifyTokenAndAdmin } = require("./verifyToken");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb("../uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

//// Add Property details
router.post(
  "/propertyDetails",
  upload.single("featureImage"),
  async (req, res) => {
    try {
      const {
        propertyTitle,
        propertyType,
        propertyDescription,
        propertyID,
        parentProperty,
        status,
        label,
        material,
        rooms,
        beds,
        baths,
        garages,
        yearBuilt,
        homeArea,
        lotDimentions,
        lotArea,
        price,
        pricePrefix,
        priceSuffix,
        priceCustom,
        location,
        friendlyAddress,
        mapLocation,
        featureImage,
        gallery,
        attachments,
        videoLink,
        amenities,
      } = req.body;


      

      // Create a new PropertyDetails document
      const newPropertyDetails = new PropertyDetails({
        propertyTitle,
        propertyType,
        propertyDescription,
        propertyID,
        parentProperty,
        status,
        label,
        material,
        rooms,
        beds,
        baths,
        garages,
        yearBuilt,
        homeArea,
        lotDimentions,
        lotArea,
        price,
        pricePrefix,
        priceSuffix,
        priceCustom,
        location,
        friendlyAddress,
        mapLocation,
        featureImage,
        gallery,
        attachments,
        videoLink,
        amenities,
      });

      // Save the new PropertyDetails document to the database
      const savedPropertyDetails = await newPropertyDetails.save();

      console.log("data in vbackend  ==> ", savedPropertyDetails);
      res.status(201).json(savedPropertyDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

//// get all property details

router.get("/properties", async (req, res) => {
  try {
    const property = await PropertyDetails.find();
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//// get single property details
router.get("/properties/:id", async (req, res) => {
  try {
    const property = await PropertyDetails.findById(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//// Edit Properties
router.put("/propertyDetails/:id", async (req, res) => {
  try {
    const updatePropertyDetails = await PropertyDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatePropertyDetails);
  } catch (error) {
    res.status(500).json(error);
  }
});

//// Delete Property
router.delete("/propertyDetails/:id", async (req, res) => {
  try {
    await PropertyDetails.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
