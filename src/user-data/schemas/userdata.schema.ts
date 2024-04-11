import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export class UserExperience {

    @Prop()
    experienceId: number;

    @Prop()
    companyName: string;

    @Prop()
    passoutYear: number

    @Prop()
    status: 'Selected' | 'Rejected';

    @Prop()
    role: string

    @Prop()
    onlineAssessmentDetails: string;

    @Prop()
    interviewDetails: string;

    @Prop()
    suggesstion: string;

    @Prop()
    linkedinLink: string;

    @Prop()
    mail: string;




}
@Schema(
    {
        timestamps: true,
    }
)
export class userdata {

    @Prop()
    userName: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    experience: UserExperience;




}

export const UserSchema =SchemaFactory.createForClass(userdata);