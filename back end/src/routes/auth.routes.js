import auth from 'basic-auth';
import{Router} from 'express'
const router =Router()

import * as autCtrl from "../controllers/auth.controller";
import { authJwt, verifySingup } from '../middlewares';

router.post('/signUp',[authJwt.verifyToken, authJwt.isAdmin, verifySingup.checkDuplicateEmail ,
verifySingup.checkRolesExisted],autCtrl.singUp)
router.post('/signIn', autCtrl.signIn )

export default router;