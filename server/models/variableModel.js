import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
const variableSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    attribute: [
      {
        type: ObjectId,
        ref: "Attribute",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Variable = mongoose.model("Variable", variableSchema);

export default Variable;
