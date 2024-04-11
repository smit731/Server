/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
export declare class UserExperience {
    experienceId: number;
    companyName: string;
    passoutYear: number;
    status: 'Selected' | 'Rejected';
    role: string;
    onlineAssessmentDetails: string;
    interviewDetails: string;
    suggesstion: string;
    linkedinLink: string;
    mail: string;
}
export declare class userdata {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    experience: UserExperience;
}
export declare const UserSchema: import("mongoose").Schema<userdata, import("mongoose").Model<userdata, any, any, any, import("mongoose").Document<unknown, any, userdata> & userdata & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, userdata, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<userdata>> & import("mongoose").FlatRecord<userdata> & {
    _id: import("mongoose").Types.ObjectId;
}>;
