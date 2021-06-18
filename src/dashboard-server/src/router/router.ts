/*** This file root entry.
 */

 import { Router } from 'express'

 const router = Router();
 import authRouter from './auth/router'; router.use(authRouter);
 
 export default router;