/*** This file root entry.
 */

 import { Router } from 'express'

 const router = Router();
 import authRouter from './auth/router'; router.use(authRouter);
 import adminRouter from './admin/router'; router.use(adminRouter);
 import userRouter from './user/router'; router.use(userRouter);


 router.get('/', (req, res)=>{
    if(req.user){
        res.redirect('/user/dashboard');
    } 
    else {
        res.redirect('/auth/login');
    }
 })
 
 export default router;