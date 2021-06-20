import { Router, urlencoded} from 'express'
import { checkLogin, checkLoginTrue } from 'lib/middleware/auth'
import * as view from './view'
import * as control from './control'

const router = Router();

router.get('/user/dashboard', checkLogin, view.getDashBoardPage);
router.get('/user/container', checkLogin, view.getContainerBoardPage);

export default router;