import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dtos/createPost.dto';

@Controller('post')
export class PostController {
    constructor(private postService:PostService){}

    @Post("/:id")
    createPost(@Body() createPostDto:CreatePostDto, @Param("id") id:string){
        return this.postService.postCreate(createPostDto,id)
    }

    @Get()
    getALlPost(){
        return this.postService.findAllPost()
    }
}
