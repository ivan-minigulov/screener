const Router = require('express')
const { body } = require('express-validator')
const router = new Router()
const userController = require('../controllers/userController')


router.post('/registration', 
                body('email').isEmail(), 
                // body('password').isLength({min: 3, max: 50}),
                userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.post('/checkauth', userController.checkAuth)
router.post('/checkvisit', userController.checkVisit)

router.post('/subsmonth', userController.subsMonth)
router.post('/substhreemonth', userController.subsThreeMonth)
router.post('/subshalfyear', userController.subsHalfYear)
router.post('/subsyear', userController.subsYear)
router.post('/survey', userController.survey)
// router.post('/accountinfoupdate', userController.accountInfoUpdate)
router.post('/submitemailinstruction', userController.submitEmailInstruction)
router.post('/updatepassword', userController.updatePassword)



module.exports = router