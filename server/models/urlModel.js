import mongoose from "mongoose";
import shortid from "shortid";



const urlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, default: shortid.generate },
    expiresAt: { type: Date, default: () => Date.now() + 7 * 24 * 60 * 60 * 1000 }, // 7 days from now
  });



  export default mongoose.model('Url' , urlSchema)