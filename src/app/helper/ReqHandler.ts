import ResponseBody from "./ResponseBody";
import userModel from "../models/user.model";

export default {
  asyncWrapper(middleware: any) {
    return (request: any, response: any, next: any) => {
      if (response.body) {
        return process.nextTick(next);
      }

      return Promise.resolve(middleware(request, response, next)).catch(
        (error) => {
          console.log(error);

          response.body = new ResponseBody(
            500,
            error.message,
            undefined,
            error
          );
          next();
        }
      );
    };
  },
  routeSanity(request: any, response: any, next: any) {
    request.isMatched = true;
    process.nextTick(next);
  },

  async validateToken(request: any, response: any, next: any) {
    try {
      const user: any = await userModel.findUser(request);
      if (!user) throw "user not exist";
      else if (user.role !== "user") throw {message:"not a user"};
      request["userId"] = user?._id;
    } catch (e: any) {
      const error = new ResponseBody(401, e.message,  e);
      response.send(error);
    }
    next();
  },
  async validateAdminToken(request: any, response: any, next: any) {
    try {
      const user: any = await userModel.findUser(request);
      if (!user) throw "admin not exist";
      else if (user.role !== "admin") throw {message:"not a admin"};
      request["userId"] = user?._id;
    } catch (e: any) {
      const error = new ResponseBody(401, e.message,  e);
      response.send(error);
    }
    next();

  },
};
