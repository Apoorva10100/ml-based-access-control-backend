import { Router } from "express";
import { accessLocations, changeOtp, getAccessed, getAll, getAllImages, getLocations, getUser, getUserById } from "../controller/user_controller";


const router = Router();

router.patch('/saveotp', async (req, res) => {
    try{
        await changeOtp(req,res);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.post("/get", async (req, res) => {
    try{
        await getUser(req,res);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.post("/getbyid", async (req, res) => {
    try{
        await getUserById(req,res);
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

router.post('/getimages',async (req,res,next) => {
    try{
        await getAllImages(req,res,next );
    }
    catch(e){
        res.status(500).send(e);
    }
})

router.patch('/addaccessed', async (req,res) => {
    try{
        await accessLocations(req,res);
    }
    catch(e){
        res.status(500).send(e);
    }
});

router.post('/getaccessed/:loc', async (req,res) => {
    try{
        await getAccessed(req,res);
    } catch(e){ 
        res.status(500).send(e);
    }
});

router.post('/getloc', async (req,res) => {
    try{
        await getLocations(req,res);
    } catch(e){ 
        res.status(500).send(e);
    }
});


export default router;