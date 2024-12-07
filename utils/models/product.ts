import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      stype: String,
      required: [true, "please provide a name "],
    },
    description: {
      type: String,
    },

    images: [{ type: String }],
    price: {
      type: Number,
    },
    originalPrice: {
      type: Number,
    },

    brand: {
      type: String,
    },
    material: {
      type: String,
    },
    bracelet: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    averageRating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    featured: {
      type: Boolean,
      default: false,
    },
    movement: {
      type: String,
      enum: [
        "Relex 3235 automatik movement",
        "Relex 3S2 automatik movement",
        "Relex 3235Ba automatik movement",
        "Relex 2589G automatik movement",
      ],
      default: "Relex 2589G automatik movement",
    },
    thickness: {
      type: String,
      default: "12mm",
    },
    glass: {
      type: String,
      default: "Saphire Glass",
    },

    luminova: {
      type: String,
      default: "yes",
    },

    casematerial: {
      type: String,
      enum: ["316L stainlss steel", "904L stainless steel"],
    },
    crown: {
      type: String,
      default: "Schrewed",
    },
    bandsize: {
      type: String,
      default: "14.5mm - 22.5cm adjustable",
    },
    lugs: {
      type: String,
      default: "20mm",
    },
    water: {
      type: String,
      default: "3 ATM",
    },
  },
  { timestamps: true }
);

productSchema.methods.hasUserPurchased  =async function(userId)