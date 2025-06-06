import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  test: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true },
  name: { type: String, required: true },
  answer: { type: String, required: true },
  max_score: { type: Number, default: 100 },
});

QuestionSchema.pre("save", function (next) {
  if (this.max_score < 0) {
    return next(new Error("Maximum score cannot be negative"));
  }
  next();
});

const Question = mongoose.model("Question", QuestionSchema);
export { Question };