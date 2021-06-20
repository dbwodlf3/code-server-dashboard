import { Router, urlencoded} from 'express'
import { checkLoginTrue } from 'lib/middleware/auth'
import * as view from './view'
import * as control from './control'

const router = Router();

router.get('/admin/user/dashboard', checkLoginTrue, view.getDashBoardPage);
router.get('/admin/user/create', checkLoginTrue, urlencoded(), view.getCreatePage);
router.get('/admin/user/:id', checkLoginTrue, urlencoded(), view.getDetailPage);

export default router;