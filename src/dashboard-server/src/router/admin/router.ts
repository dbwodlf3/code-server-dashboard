import { Router, urlencoded} from 'express'
import { checkLogin, checkLoginTrue } from 'lib/middleware/auth'
import * as view from './view'
import * as control from './control'

const router = Router();

router.get('/admin/user/dashboard', checkLogin, view.getDashBoardPage);
router.get('/admin/user/create', checkLogin, view.getCreatePage);
router.get('/admin/user/:id', checkLogin, urlencoded(), control.login);

export default router;