const router = require('express').Router();
const {add, getAll, getSingle, login} = require('../controllers/userController');

router.get('/getAll', getAll);
router.post('/add', add);
router.get('/getSingle/:id', getSingle);
router.post('/login', login);


module.exports = router;