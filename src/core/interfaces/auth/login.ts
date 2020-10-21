import { IUser } from "../user";

export interface IAuthLoginReqPayload {
    email: string,
    password: string
}

export interface IAuthLoginResPayload {
    user: IUser,
    access_token: string
}

export interface IAuthLoginForm {
    email: {
        value: string,
        msg: string,
    },
    password: {
        value: string,
        msg: string
    }
}