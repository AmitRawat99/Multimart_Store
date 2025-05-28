import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const ConnectDb = async () => {
  try {
    if (!process.env.MONGO_DB) {
      console.log("Mongo Is Undefined In Invironmnet Variable");
      console.error("Mongodb Undefined Invironment variable");
    }
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
    });

    console.log("Connect Your Database");
  } catch (error) {
    console.error("Database Connection Error");
    process.exit();
  }
};

export default ConnectDb;
