const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// sample logins without validations
// router.post('/login',(rew,res)=> {
//     res.send('login sucess');
// });

// router.post('/signup',(rew,res)=> {
//     res.send('signup sucess');
// });


router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;