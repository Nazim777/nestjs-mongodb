import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Profile } from 'src/schema/profile.schema';
import { User } from 'src/schema/user.schema';
import { CreateProfileDto } from './dtos/createProfile.dto';

@Injectable()
export class ProfileService {
    constructor(
        @InjectModel(Profile.name) private profileModel:Model<Profile>,
        @InjectModel(User.name) private userModel:Model<User>
    
    ){}

    async profileCreate(createProfileDto:CreateProfileDto,id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException("Invalid id!",404)
        const user = await this.userModel.findById(id)
    if(!user) throw new HttpException("User not found to update",404)
     const newProfile = new this.profileModel(createProfileDto)
    const savedProfile = await newProfile.save()
  await  user.updateOne({profile:savedProfile._id})
    return savedProfile
    }
}
