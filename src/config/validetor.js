const Model = {id:123,name:'prahllad',detail:'TEST----------'}
const err =  {message:'Validation failed' ,code:422}
module.exports ={
    validator
}

async function validator(req,res,next){
    try{
        const {body} = req
        for(let props in body){
            if(!Model[props]){
                throw err
            }
            if(body[props]===''){
                throw err

            }   
        }
        next();

    }catch(err){
        res.send(err)
    }
}