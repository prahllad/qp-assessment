import productModel from "../models/product.model";
import  ResponseBody  from "../helper/ResponseBody";
import orderModel from "../models/order.model";

const userController = {
    
    listProduct,
    createOrder
};
export default userController;

async function listProduct(request: any, response: any, next: any) {
    const data = await productModel.listofProduct();
    const responseBody = new ResponseBody(200, "product fetched successfully", data);
    response.body = responseBody;
    next();
}

async function createOrder(request: any, response: any, next: any) {
    const { body } = request
    const data = await orderModel.createOrder( body.productId , body.userId);
    const responseBody = new ResponseBody(200, "order created successfully", data);
    response.body = responseBody;
    next();
}