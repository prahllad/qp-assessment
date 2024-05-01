import User from "../schema/userSchema";
const userModel ={
    
    findUser
    
}
export default userModel;


async function findUser(request: any) {
    const b64auth = (request.headers.authorization || "").split(" ") || "";
    const [email, password] = Buffer.from(b64auth[1], "base64")
      .toString()
      .split(":");

      return await User.findOne({ email: email, password: password });
  }



    
