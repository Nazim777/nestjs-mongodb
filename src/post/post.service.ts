import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Post } from 'src/schema/post.schema';
import { User } from 'src/schema/user.schema';
import { CreatePostDto } from './dtos/createPost.dto';


@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel:Model<Post>,
        @InjectModel(User.name) private userModel :Model<User>
        ){}
       async postCreate(createPostDto:CreatePostDto,id:string){
            const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException("Invalid id!",404)
        const user = await this.userModel.findById(id)
        if(!user) throw new HttpException("User not found to update",404)

        const newPost = new this.postModel({...createPostDto,user:id})
        const savedPost = await newPost.save()
        await user.updateOne({
            $push:{
                posts:savedPost._id
            }
        })
        return savedPost
        }

        findAllPost(){
            return this.postModel.find().populate(['user'])
        }
}
