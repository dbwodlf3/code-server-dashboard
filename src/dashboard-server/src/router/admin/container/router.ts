import { Router, urlencoded, json } from 'express'
import { checkLogin, checkLoginTrue } from 'lib/middleware/auth'
import * as view from './view'
import * as control from './control'

const router = Router();

router.get('/admin/container/dashboard', checkLogin, view.getDashBoardPage);
router.get('/admin/container/create', checkLogin, urlencoded(), view.getCreatePage);
router.post('/admin/container/create', checkLogin, urlencoded(), control.createContainer)
router.get('/admin/container/:id', checkLogin, urlencoded(), view.getDetailPage);

router.post('/admin/api/getContainers', json(), control.getContainers)

export default router;