import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export class Experience {

    @Prop()
    name: string;

    @Prop()
    passoutYear: number;

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

@Schema({
    timestamps: true,
})
export class companyData {

    @Prop()
    companyId:string

    @Prop()
    name: string;

    @Prop()
    location: string;

    @Prop()
    keywords: string[];

    @Prop()
    description: string;

    @Prop()
    experience: Experience;

}
export const CompanySchema =SchemaFactory.createForClass(companyData);