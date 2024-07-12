import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://pranav624:Pranav1234@cluster0.yjkwjta.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}