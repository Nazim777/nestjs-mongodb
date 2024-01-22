import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Profile } from "./profile.schema";
import mongoose from "mongoose";
import { Post } from "./post.schema";

@Schema()
export class User{
    @Prop()
    email:string;

    @Prop()
    password:string;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:"Profile"})
    profile?:Profile

    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}]})
    posts:Post[]
}


export const userSchema = SchemaFactory.createForClass(User)