'use strict'

import express from 'express'
import { ReqHandler } from '../../app/helper'
import userController from '../../app/controller/user'

const userRouter = express.Router()

const { routeSanity, asyncWrapper , validateToken  } = ReqHandler

userRouter.get('/product', routeSanity,validateToken , asyncWrapper(userController.listProduct))
userRouter.post('/order',routeSanity , validateToken, asyncWrapper(userController.createOrder))

export default userRouter
