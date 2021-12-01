import { User } from "../model/user";
import bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";


export async function addUser(req: Request, res: Response, next: NextFunction) {
    await User.findOne({ Email: req.body.Email }, (err: any, user: any) => {
      if (err) {
        return res.status(404).json(err);
      }
      if (user) {
        return res.status(401).json({
          message: `user already present with email ${req.body.Email}`,
        });
      }
    });
    const user = new User(req.body);
    user.Password = await bcrypt.hash(user.Password, 10);
    user.save((err: any, user: any) => {
        if (err) {
            return res.status(404).json(err);
        }
        return res.status(200).json(user);
    });
  }

export async function loginUser(req: Request, res: Response, next: NextFunction) {
    await User.findOne({ Email: req.body.Email }, (err: any, user: any) => {
      if (err) {
        return res.status(404).json(err);
      }
      if (!user) {
        return res.status(401).json({
          message: `user ${req.body.Email} not found.`,
        });
      }
      bcrypt.compare(req.body.Password, user.Password, (error: any, isMatch: boolean)=> {
          if (error) {
            return res.json(error);
          }
            if (isMatch) {
                return res.json({
                    message: "Login Successful",
                    user: user
                });
            
          } else {
            res.json({ message: `wrong password` });
          }
        }
      );
    });
  }