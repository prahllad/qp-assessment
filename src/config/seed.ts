const users = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
        password: 'secret' // You should hash passwords in a real-world scenario
    },
    {
        name: 'Alice Smith',
        email: 'alice@example.com',
        role: 'user',
        password: 'password'
    }
];

import userSchema from '../app/schema/userSchema';

const seedUser = async ()=>{
    try{
    let user:any =await userSchema.find({email:{$in:users.map((el:any)=> el.email)}})
    if(user.length>1){
        return;
    }
    await userSchema.insertMany(users);

    } catch(err){
        throw err;
    }
   
} 

export default seedUser;