import { Router, urlencoded} from 'express'
import { checkLogin } from 'lib/middleware/auth'
import * as view from './view'
import * as control from './control'

const router = Router();

router.get('/admin/user/dashboard', checkLogin, view.getDashBoardPage);
router.get('/admin/user/create', checkLogin, view.getCreatePage);
router.post('/admin/user/create', checkLogin, urlencoded(), control.createUser);

router.get('/admin/user/:id', checkLogin, view.getDetailPage);

export default router;