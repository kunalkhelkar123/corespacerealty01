const mongoose = require("mongoose");

const PropertyDetailsSchema = mongoose.Schema(
  {
    propertyTitle: { type: String },
    propertyType: { type: Array },
    propertyDescription: { type: String },
    propertyID: { type: String },
    parentProperty: { type: String },
    status: { type: String },
    label: { type: Array },
    material: { type: Array },
    rooms: { type: Number },
    beds: { type: Number },
    baths: { type: Number },
    garages: { type: Number },
    yearBuilt: { type: Number },
    homeArea: { type: String },
    lotDimentions: { type: String },
    lotArea: { type: String },
    price: { type: String },
    pricePrefix: { type: String },
    priceSuffix: { type: String },
    priceCustom: { type: String },
    location: { type: String },
    friendlyAddress: { type: String },
    mapLocation: { type: String },
    /////////////////////
    featureImage: {
      data: Buffer,
      contentType: String,
    },
    gallery: [
      {
        data: Buffer,
        contentType: String,
      },
    ],
    attachments: [
      {
        data: Buffer,
        contentType: String,
      },
    ],
    videoLink: { type: String },
    amenities: { type: Array },
    //////////////////////////
    // featureImage: { type: String },
    // gallery: { type: String },
    // attachments: { type: String },
    // videoLink: { type: String },
    amenities: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyDetails", PropertyDetailsSchema);
