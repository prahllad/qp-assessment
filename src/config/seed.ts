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
import mongoose from 'mongoose';

const seedUser = async ()=>{
    try{
    await userSchema.insertMany(users);

    } catch(err){
        throw err;
    }
   
} 

export default seedUser;