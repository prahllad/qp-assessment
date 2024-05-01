import mongoose, { Schema } from 'mongoose';


const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true , unique:true},
  price: { type: Number, required: true , default:0},
  inventoryLevel:{type: Number, required:true , default:0},
  createdAt: { type: Date, default: Date.now },
  
  });
 

const Product = mongoose.model('product', productSchema);
export default Product;