import { Router } from "express";
import { changeOtp, getAll, getUser } from "../controller/user_controller";


const router = Router();

router.patch('/saveotp', async (req, res) => {
    try{
        await changeOtp(req,res);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.get("/get", async (req, res) => {
    try{
        await getUser(req,res);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.get("/getall", async (req, res) => {
    try{
        await getAll(req,res);
    }
    catch(e){
        res.status(500).send(e);
    }
});


export default router;