import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";

@Schema()
export class Post{

    @Prop({required:true})
    title:string

    @Prop({required:true})
    description:string

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"User"})
    user:User
}

export const postSchema = SchemaFactory.createForClass(Post)