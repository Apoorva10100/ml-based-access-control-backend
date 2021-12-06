import { Document, Schema, Model, model} from 'mongoose';

const LocationSchema = new Schema({
    room: {
        type: String,
    },
    dateandtime: {
      type: String,
    },
});


export interface IUser extends Document {
  Employee_Name: string;
  Employee_ID: string;
  Project_Name: string;
  Supervisor_Name: string;
  Role: string;
  Email: string;
  Password: string;
  otp: string;
  image: string;
  Division: string;
  accessedAt: Object;
}

export const userSchema: Schema = new Schema({
  Employee_Name: {
    type: String,
    required: true,
  },
  Employee_ID: {
    type: String,
    required: true,
  },
  Project_Name: {
    type: String,
    required: true,
  },
  Supervisor_Name: {
    type: String,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator: (v: any) => {
        return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(v);
      },
      message: 'Please enter a valid email',
    },
    required: [true, 'Email required'],
  },
  Password: {
    type: String,
    required: true,
  },
  otp: {
    type: String
  },
  image: {
    type: String,
  },
  Division: {
    type: String,
  },
  accessedAt: [LocationSchema],
});

export const User: Model<IUser> = model<IUser>('User', userSchema);