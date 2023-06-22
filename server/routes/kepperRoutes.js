const {Router} = require("express");
const { getKeeper, saveKeeper, updateKeeper, deleteKeeper } = require("../controllers/keeperController");
const requireAuth = require('../middleware/requireAuth')

const router = Router();

// protect the below part using middleware , below part can be only acces if user have authorization token
router.use(requireAuth)  

// routes to serve the client request
router.get('/',getKeeper);
router.post('/save', saveKeeper);
router.post('/update', updateKeeper);
router.post('/delete', deleteKeeper);


module.exports = router;