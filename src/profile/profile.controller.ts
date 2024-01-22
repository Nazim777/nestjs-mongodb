import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dtos/createProfile.dto';

@Controller('profile')
export class ProfileController {
    constructor(private profileService:ProfileService){}

    @Post("/:id")
    createProfile(@Body() createProfileDto:CreateProfileDto,@Param("id") id:string){
        return this.profileService.profileCreate(createProfileDto,id)
    }
}
