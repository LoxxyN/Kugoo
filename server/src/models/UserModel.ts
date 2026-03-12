import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types/IUser'

const UserSchema = new Schema<IUser>({
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
})

export const UserModel = mongoose.model<IUser>('User', UserSchema)
