import mongoose, { Schema } from 'mongoose';

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true },
    price: { type: Number, required: true},
    
    });
   
const orderSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.ObjectId, required: true },
  totalPrice: { type: String, required: true },
  itemList:[productSchema],
  createdAt: { type: Date, default: Date.now },
  
  });
 

const Order = mongoose.model('order', orderSchema);
export default Order