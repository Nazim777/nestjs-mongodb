import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"


@Schema()
export class Profile{
    @Prop({required:true})
    firstName:string

    @Prop({required:true})
    lastName:string

    @Prop({required:true})
    age:string

    @Prop({required:true})
    dob:string
}

export const profileSchema = SchemaFactory.createForClass(Profile)