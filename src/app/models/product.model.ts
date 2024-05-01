import Product from "../schema/productSchema";

const productModel ={
    creaProduct,
    updateProduct,
    listofProduct,
    deleteProduct
}
export default productModel;

async function creaProduct(productList:any){
    try{
        await Product.insertMany(productList);
        return {message:'product inserted successfully'}

    } catch(err){
        throw err;
    }
}
async function updateProduct(id:any, query:any){
    try{

        await Product.updateOne({_id:id},{$set:query});
        return {message:'product updated successfully'}

    } catch(err){
        throw err;
    }
}

async function listofProduct() {
    try{

        return await Product.find({});
        

    } catch(err){
        throw err;
    }
    
}
async function deleteProduct(id:any) {
    try{

         await Product.deleteOne({
            _id:id
         });
        return {message:'product deleted successfully'}

    } catch(err){
        throw err;
    }
    
}