import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom", required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
},);

// { uniqueIndexes: { room: 1, student: 1 } });
  
EnrollmentSchema.index({ room: 1, student: 1 }, { unique: true }); // Correct way to enforce uniqueness

const Enrollment = mongoose.model("Enrollment", EnrollmentSchema);

export { Enrollment };
