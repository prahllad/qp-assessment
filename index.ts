import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from './src/config/routers';
import connectDB from "./src/config/db";
import bodyParser from "body-parser";
import {ResHandler} from "./src/app/helper"
import { ResponseBody } from "./src/app/helper";
const BODY_LIMIT = '5mb'


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
connectDB();

app.use(bodyParser.json({ limit: BODY_LIMIT }));
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }));
app.use(express.json());

app.use(router);
app.use("*", (request:any, response:any, next:any) => {
  if (!request.isMatched) {
    const { method, originalUrl } = request;
    const message = `Cannot ${method} ${originalUrl}`;
    const error = new ResponseBody(404, message);
    response.body = error;
  }
  return ResHandler.handleResponse(request, response, next);
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});