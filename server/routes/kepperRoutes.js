const {Router} = require("express");
const { getKeeper, saveKeeper, updateKeeper, deleteKeeper } = require("../controllers/keeperController");

const router = Router();

// routes to serve the client request
router.get('/',getKeeper);
router.post('/save', saveKeeper);
router.post('/update', updateKeeper);
router.post('/delete', deleteKeeper);


module.exports = router;