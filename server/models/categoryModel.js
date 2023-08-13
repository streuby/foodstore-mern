import mongoose from "mongoose";
const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, "Too Short"],
      maxlength: [32, "Too Long"],
      trim: true,
      require: true,
    },
    image: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);
const Category = mongoose.model("Category", CategorySchema);

export default Category;
