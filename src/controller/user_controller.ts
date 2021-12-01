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