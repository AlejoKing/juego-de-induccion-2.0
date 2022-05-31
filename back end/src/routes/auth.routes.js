import auth from 'basic-auth';
import{Router} from 'express'
const router =Router()

import * as autCtrl from "../controllers/auth.controller";
import { authJwt, authjwt } from '../middlewares';

router.post('/signUp',[authJwt.verifyToken, authJwt.isAdmin ],autCtrl.singUp)
router.post('/signIn', autCtrl.signIn )

export default router;