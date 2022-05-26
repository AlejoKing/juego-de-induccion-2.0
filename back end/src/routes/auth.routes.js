import{Router} from 'express'
const router =Router()

import * as autCtrl from "../controllers/auth.controller";

router.post('/signUp',autCtrl.singUp)
router.post('/signIn', autCtrl.signIn )

export default router;