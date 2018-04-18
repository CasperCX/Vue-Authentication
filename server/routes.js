const AuthController = require("./controllers/AuthController");
const router = require("express").Router();


router.get('/', (req, res) => {
    res.status(200).send("hello from express router");
});

router.get('/api/auth',
    AuthController.auth );

router.post('/api/login',
    AuthController.login );
    
router.get('/api/logout',
    AuthController.logout );

router.get('/api/user',
    AuthController.currentUser );

router.get('/api/createUser', 
    AuthController.createUser );


module.exports = router;