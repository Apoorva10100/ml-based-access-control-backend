import { Router } from "express";
import { addUser, loginUser } from "../controller/auth_controller";

const router = Router();

router.post('/login', async (req, res, next) => {
    try{
        await loginUser(req, res, next);
    }
    catch(error){
        res.json({message: error});
    }
});

router.post('/register', async (req, res, next) => {
    try{
        await addUser(req, res, next);
    }
    catch(error){
        res.json({message: error});
    }
});

export default router;
