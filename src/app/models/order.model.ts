import Order from "../schema/orderSchema";
import Product from "../schema/productSchema";
const orderModel ={
    createOrder,
    listOrder
    
}
export default orderModel;

async function createOrder(productId:any,userId:any){
    try{
        const product:any = await Product.find({_id:{$in:Object.keys(productId)}}).lean()
        let totalPrice = 0;
        let promiseArray =[];
        for(let i = 0;i<product.length;i++){
            if(productId[product[i]._id]>product[i].inventoryLevel){
                  throw {message:'requested qty not available'}

            }
            else if(!productId[product[i]._id]){
                throw {message:'invalid order qty'}
            }
            promiseArray.push( await Product.updateOne({_id:product[i]._id}, { $inc: { inventoryLevel: -productId[product[i]._id]}}))
            totalPrice = totalPrice + product[i].price;
        }
        await Promise.all(promiseArray)
       
        await Order.create({userId:userId,totalPrice:totalPrice,itemList:product});
        return {message:'order created successfully'}   

    } catch(err){
        throw err;
    }
}

async function listOrder() {
    try{

        return await Order.find({});
        

    } catch(err){
        throw err;
    }
}

    
