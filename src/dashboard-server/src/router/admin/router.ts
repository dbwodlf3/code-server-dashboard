import { Router, urlencoded} from 'express'
import { checkLogin, checkLoginTrue } from 'lib/middleware/auth'
import * as view from './view'
import * as control from './control'

const router = Router();

import containerRouter from './container/router'; router.use(containerRouter);
import userRouter from './user/router'; router.use(userRouter);

export default router;
