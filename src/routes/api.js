const express =require('express');
const UsersController=require("../controllers/UsersController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");


const router =express.Router();


router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.profileDetails);


module.exports=router;






































module.exports=router;