'use strict'

import express from 'express'
import { ReqHandler, ResHandler } from '../../app/helper'
import adminController from '../../app/controller/admin'
import { request } from 'http'

const adminRouter = express.Router()

const { routeSanity, asyncWrapper , validateAdminToken} = ReqHandler

adminRouter.get('/',(request:any,response:any)=>{response.send('ok')})
adminRouter.get('/product', routeSanity, validateAdminToken, asyncWrapper(adminController.listProduct))
adminRouter.post('/product',routeSanity , validateAdminToken, asyncWrapper(adminController.creaProduct))
adminRouter.delete('/product/:id',routeSanity , validateAdminToken,  asyncWrapper(adminController.deleteProduct))
adminRouter.put('/product/:id',routeSanity , validateAdminToken,  asyncWrapper(adminController.updatedProduct))
adminRouter.get('/order', routeSanity, validateAdminToken,  asyncWrapper(adminController.listOrder))



export default adminRouter
