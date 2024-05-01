import productModel from "../models/product.model";
import ResponseBody from "../helper/ResponseBody";
import orderModel from "../models/order.model";

const adminController = {
  creaProduct,
  updatedProduct,
  listProduct,
  deleteProduct,
  listOrder
};
export default adminController;

async function creaProduct(request: any, response: any, next: any) {
  const { body } = request;
  const data = await productModel.creaProduct(body);
  const responseBody = new ResponseBody(
    200,
    "product created successfully",
    data
  );
  response.body = responseBody;
  next();
}
async function updatedProduct(request: any, response: any, next: any) {
  const { params, body } = request;
  const data = await productModel.updateProduct(params.id, body);
  const responseBody = new ResponseBody(200, data);
  response.body = responseBody;
  next();
}
async function listProduct(request: any, response: any, next: any) {
  const data = await productModel.listofProduct();
  const responseBody = new ResponseBody(
    200,
    "product fetched successfully",
    data
  );
  response.body = responseBody;
  next();
}
async function deleteProduct(request: any, response: any, next: any) {
  const { params } = request;
  const data = await productModel.deleteProduct(params.id);
  const responseBody = new ResponseBody(
    200,
    "product deleted successfully",
    data
  );
  response.body = responseBody;
  next();
}

async function listOrder(request: any, response: any, next: any) {
  const data = await orderModel.listOrder();
  const responseBody = new ResponseBody(
    200,
    "order fetched successfully",
    data
  );
  response.body = responseBody;
  next();
}
