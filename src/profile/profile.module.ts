import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, profileSchema } from 'src/schema/profile.schema';
import { User, userSchema } from 'src/schema/user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Profile.name,schema:profileSchema}]), 
    MongooseModule.forFeature([{name:User.name,schema:userSchema}])],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
