import { Types } from "mongoose";

export interface INote{

    title : string,
    content:string,
    category : string,
    user: Types.ObjectId
}
