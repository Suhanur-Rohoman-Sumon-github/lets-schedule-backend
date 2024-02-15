import mongoose from "mongoose";

// Create a Mongoose schema
const visitorSchema = new mongoose.Schema({
    ip: String,
    date: { type: Date, default: Date.now },
});

// Create a Mongoose model
export const Visit = mongoose.model('Visit', visitorSchema);