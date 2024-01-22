import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}


    @Post()
    createUser(@Body() createUserdto:CreateUserDto){
        return this.userService.userCreate(createUserdto)
    }

    @Get()
    getALlUser(){
        return this.userService.findAllUser()
    }

    @Patch("/:id")
    updateUser(@Body() updateUserDto:UpdateUserDto,@Param("id") id:string){
        return this.userService.userUpdate(updateUserDto,id)

    }

    @Get("/:id")
    getSingleUser(@Param("id")id:string){
        return this.userService.singleUser(id)
    }

    @Delete("/:id")
    deleteUser(@Param("id") id:string){
        return this.userService.userDelete(id)
    }
}
