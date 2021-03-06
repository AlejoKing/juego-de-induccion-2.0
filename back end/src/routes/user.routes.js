import{Router} from 'express'
const router =Router()

import * as userCtrl from '../controllers/user.controller';
import {authJwt, verifySingup} from '../middlewares';

router.get("/User", userCtrl.getUser);
router.get("/UserId/:userId", userCtrl.getUserById);
router.delete('/delete/:userId',[authJwt.verifyToken, authJwt.isAdmin,],userCtrl.deleteUser)
router.put('/update/:userId',[authJwt.verifyToken, authJwt.isAdmin,],userCtrl.updateUser)

export default router;