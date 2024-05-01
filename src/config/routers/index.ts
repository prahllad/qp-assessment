import { Router } from 'express';
import usersRouter from './userRouter';
import adminRouter from './adminRouter';
import seedUser from '../seed';

seedUser();
const routes = Router();

routes.use('/user', usersRouter);
routes.use('/admin',adminRouter);


export default routes;
