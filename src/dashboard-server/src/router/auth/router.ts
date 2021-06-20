import { Router, urlencoded} from 'express'
import { checkLogin, checkLoginTrue } from 'lib/middleware/auth'
import * as view from './view'
import * as control from './control'

const router = Router();

router.get('/auth/login', checkLoginTrue, view.getLoginPage);
router.get('/auth/logout', checkLogin, control.logout);
router.post('/auth/login', checkLoginTrue, urlencoded(), control.login);

export default router;