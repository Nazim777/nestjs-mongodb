import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel:Model<User>){}

    userCreate(createUserDto:CreateUserDto){
        const newUser = new this.UserModel(createUserDto)
        return newUser.save()
    }

    findAllUser(){
        return this.UserModel.find().populate(['profile','posts'])
    }

   async userUpdate(updateUserDto:UpdateUserDto,id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException("Invalid id!",404)
        const user =await this.UserModel.findById(id)
        if(!user) throw new HttpException("user not found to update!",404)
        return this.UserModel.findByIdAndUpdate(id,updateUserDto,{new:true})

    }

   async singleUser(id:string){
        const isValid =  mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException("Invalid id!",404)
        const user = await this.UserModel.findById(id)
    if(!user) throw new HttpException("user not found!",404)
    return user
    }
    
    async userDelete(id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException("Invalid id!",404)
        const user = await this.UserModel.findById(id)
    if(!user) throw new HttpException("User not found!",404)
    this.UserModel.findByIdAndDelete(id)
    return({
        msg:"User deleted successfully!"
    })
    }

}
