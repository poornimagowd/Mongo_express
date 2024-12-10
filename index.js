import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const port = process.env.PORT || 7000;
const mongourl = process.env.MONGO_URL;

mongoose.connect(mongourl).then(()=>{
    console.log('Database connected successfully!');
    app.listen(port, () =>{
     console.log(`Server is running on the port=${port}`);
    });

}).catch((error) =>{
console.log('error', error);
})

const produtSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const productModel = mongoose.model("products", produtSchema);


app.get('/getProducts', async(req,res)=>{
    const productData = await productModel.find();
    res.send(productData);
})
