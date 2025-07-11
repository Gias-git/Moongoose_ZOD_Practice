export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: 'USER' | 'ADMIN',
    address:{
        city : string,
        street : string,
        zip:Number
    }
}