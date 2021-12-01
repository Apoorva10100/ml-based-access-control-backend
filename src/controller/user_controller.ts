import { Request, Response } from "express";
import { User } from "../model/user";

export async function changeOtp(req: Request, res: Response) {
  await User.findOneAndUpdate(
    { Email: req.body.Email },
    { $set: { otp: req.body.Otp } }
  );
  const user = await User.findOne({ Email: req.body.Email });
  res.status(200).json(user);
}

export async function getUser(req: Request, res: Response) {
    const user = await User.findOne({ Email: req.body.Email });
    res.status(200).json(user);
}

export async function getAll(req: Request, res: Response) {
    const user = await User.find();
    res.status(200).json(user);
}

export async function accessLocations(req: Request, res: Response) {
    await User.findOne({ Email: req.body.Email }, async (err:any, user:any) => {
        if(err) {
            res.status(400).json({
                message: 'Error'
            });
        }
        else {
            const locs: any[] = [];
            if (user.accessedAt.length > 0) {
                for (var i = 0; i < user.accessedAt.length; i++) {
                        locs.push(user.accessedAt[i]);
                    
                }
            }
            locs.push(req.body.accessedAt);
            console.log(locs);
            await User.findOneAndUpdate(
                { Email: req.body.Email },
                { $set: { accessedAt: locs}} 
              );
        }
    });
    const user = await User.findOne({ Email: req.body.Email });
    res.status(200).json(user);
}

export async function getAccessed(req: Request, res: Response) {
    await User.findOne({ Email: req.body.Email }, async (err:any, user:any) => {
        if(err) {
            res.status(400).json({
                message: 'Error'
            });
        }
        else {
            const locs: any[] = [];
            if (req.params.loc == "all") {   
            
                for (var i = 0; i < user.accessedAt.length; i++) {
                        locs.push(user.accessedAt[i]);
            }}
            else{
                if (user.accessedAt.length > 0) {
                for (var i = 0; i < user.accessedAt.length; i++) {
                    if (user.accessedAt[i].room == req.params.loc) {
                        locs.push(user.accessedAt[i]);
                    } 
                }
            }}
            
            res.status(200).json(locs);
        }
    });
}

export async function getLocations(req: Request, res: Response) {
    await User.findOne({ Email: req.body.Email }, async (err:any, user:any) => {
        if(err) {
            res.status(400).json({
                message: 'Error'
            });
        }
        else {
            const locs: any[] = [];  
            
                for (var i = 0; i < user.accessedAt.length; i++) {
                        locs.push(user.accessedAt[i].room);
                }
            
            res.status(200).json(locs);
                
            }
    });
}