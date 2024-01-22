import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Post, postSchema } from 'src/schema/post.schema';
import { User, userSchema } from 'src/schema/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Post.name,schema:postSchema}]),
    MongooseModule.forFeature([{name:User.name,schema:userSchema}])
],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
