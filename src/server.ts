import mongoose from "mongoose";
import config from "./config";
import { Server } from "http";
import app from "./app";

let server: Server;

const connection = async () =>{
    try{
        await mongoose.connect(config.database_url as string);
        console.log("Database is connected successfully. Thank you.");
        server = app.listen(config.port, ()=>{
            console.log(`Application is listening on port ${config.port}`)
        })
    }catch(error){
        console.log("Failed to connect to database.");
    }
}

connection()